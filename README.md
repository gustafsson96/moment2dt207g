# Moment 2 DT207G Part 1

This project makes up the first part of my contribution for moment 2 in the course "Backend-baserad webbutveckling" (dt207g) at Mittuniversitetet, Sundsvall. 

## Link

## Installation

This API uses a MySQL-database. For installation, follow these steps:

1. Clone the repository: git clone https://github.com/gustafsson96/moment2dt207g.git 
2. Navigate into the project folder: cd your-project-folder-name
3. Ensure that Node.js is installed. Install necessary dependencies by running: npm install.
4. Create a .env file and add in your database credentials.
5. Make sure a MySQL database is created.
6. Run the install script: node install.js

The installation script will create the following database table: 
work_experience(id, company_name, job_title, location, start_date, end_date, description)

| Column Name     | Data Type            | Description                   | Nullable | Default Value |
|-----------------|----------------------|-------------------------------|----------|---------------|
| `id`            | INT(11), AUTO_INCREMENT | Primary Key, Auto-increment    | No       | None          |
| `company_name`  | VARCHAR(100)         | Name of the company            | No       | None          |
| `job_title`     | VARCHAR(100)         | Job title                      | No       | None          |
| `location`      | VARCHAR(50)          | Job location                   | No       | None          |
| `start_date`    | DATE                 | Start date of employment       | No       | None          |
| `end_date`      | DATE                 | End date of employment         | Yes      | NULL          |
| `description`   | TEXT                 | Job description                | Yes      | NULL          |

## Use

##