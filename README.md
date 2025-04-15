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

| Column Name     | Data Type            | Description                   | Nullable |
|-----------------|----------------------|-------------------------------|----------|
| `id`            | INT(11), AUTO_INCREMENT | Primary Key, Auto-increment | No    | 
| `company_name`  | VARCHAR(100)         | Name of the company            | No       | 
| `job_title`     | VARCHAR(100)         | Job title                      | No       | 
| `location`      | VARCHAR(50)          | Job location                   | No       |
| `start_date`    | DATE                 | Start date of employment       | No       |
| `end_date`      | DATE                 | End date of employment         | Yes      |
| `description`   | TEXT                 | Job description                | Yes      |

## Use API

| Method    | End Point         | Description  |
|-----------------|----------------------|---------|
| GET   | /work_experience      | Get all work experience.|
| POST  | /work_experience      | Add a new work experience.|
| GET   | /delete/:id/"         | Delete a work experience by id. |

A work_experience object is sent/returned as a JSON object. An example is presented below:

{ <br>
    "company_name": "Tech Corp",<br>
    "job_title": "Software Developer",<br>
    "location": "Stockholm",<br>
    "start_date": "2023-01-10",<br>
    "end_date": "2025-01-10",<br>
    "description": "Developed and maintained software applications."<br>
    <br>
  }

Additional notes: 
* When creating a work experience, ensure company_name, job_title, location and start_date are provided. end_date and description are optional. 
* Deleting a work experience will remove the entry from the database.





