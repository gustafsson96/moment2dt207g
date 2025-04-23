const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.log("Connection failed: " + err);
    }
    console.log("Connected to database");
});

// Routes

// Route to collect work experience data
app.get("/work_experience", (req, res) => {
    connection.query(`SELECT * FROM work_experience;`, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Something went wrong: " + err });
            return;
        }
        res.status(200).json(results);
    })
});

// Route to add work experience
app.post("/work_experience", (req, res) => {
    let { company_name, job_title, location, start_date, end_date, description } = req.body;

    // Validate user input by making sure fields are not empty (except for end_date that allow null)
    if (!company_name || !job_title || !location || !start_date || !description) {
        return res.status(400).json({ error: "Company name, job title, location, start date and description are required." })
    }

    connection.query(`INSERT INTO work_experience(company_name, job_title, location, start_date, end_date, description) VALUES (?, ?, ?, ?, ?, ?);`, [company_name, job_title, location, start_date, end_date, description], (err, results) => {
        if (err) {
            res.status(500).json({ error: "Something went wrong: " + err });
            return;
        }

        let work_experience = {
            company_name: company_name,
            job_title: job_title,
            location: location,
            start_date: start_date,
            end_date: end_date,
            description: description
        };

        res.status(201).json({ message: "Work experience added", work_experience });
    });
});

// Route to update work experience
app.put("/work_experience/:id", (req, res) => {
    const work_experience_id = req.params.id;
    const { company_name, job_title, location, start_date, end_date, description } = req.body;

    // Basic validation
    if (!company_name || !job_title || !location || !start_date || !description) {
        return res.status(400).json({ error: "Company name, job title, location, start date and description are required." })
    }

    const updateQuery = `
        UPDATE work_experience
        SET company_name = ?, job_title = ?, location = ?, start_date = ?, end_date = ?, description = ?
        WHERE id = ?
    `;

    connection.query(updateQuery, [company_name, job_title, location, start_date, end_date, description, work_experience_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: "Something went wrong: " + err });
            return;
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "No work experience entry found with that ID." });
        }

        res.status(200).json({ message: "Work experience updated successfully." });
    });
});

// Route to delete work experience
app.delete("/work_experience/:id", (req, res) => {
    const work_experience_id = req.params.id;

    connection.query(`DELETE FROM work_experience WHERE id = ?`, [work_experience_id], (err, result) => {
        if (err) {
            console.error("Error deleting entry: ", err.message);
            return res.status(500).send("Something went wrong");
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "No work experience entry found with that ID." });
        }

        res.status(200).json({ message: "Work experience deleted successfully." });
    });
});


// Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
