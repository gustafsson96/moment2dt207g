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

// Routing for
app.get("/", (req, res) => {

});

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

});

// Route to delete work experience
app.get("delete/:id/", (req, res) => {

});


// Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
