const mysql = require("mysql");
require("dotenv").config();

// Connect to mysql
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.log("Connection failed: " + err.message);
        return;
    }

    console.log("Connected to database");

    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS work_experience (
            id INT AUTO_INCREMENT PRIMARY KEY,
            company_name VARCHAR(100) NOT NULL,
            job_title VARCHAR(100) NOT NULL,
            location VARCHAR(50) NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE,
            description TEXT
        );
    `;

    connection.query(createTableQuery, (err, result) => {
        if (err) {
            console.error("Failed to create table: ", err.message);
        } else {
            console.log("Table 'work_experience' has been created.");
        }

        connection.end();
    });
});