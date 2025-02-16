const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Check Database Connection
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


// ROUTES //

// API Route to Add a New User. Working as tested by Postman.
app.post('/addUser', (req, res) => {
    const { firstName, lastName, phone, email } = req.body;
    
    const sql = `INSERT INTO Users (FirstName, LastName, Phone, Email) VALUES (?, ?, ?, ?)`;
    db.query(sql, [firstName, lastName, phone, email], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'User added successfully!', userId: result.insertId });
    });
});

// API Route to get user name correponding to user_id. This feels redundant so need to fix later.
app.get('/getUserName', (req, res) => {
    const userId = req.params.userId;

    const sql = `SELECT (FirstName, LastName) FROM Users WHERE idUsers = ?userID_from_UI`;

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user name:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
});

// API Route to display all tasks/fledges for specified user. Working as tested by Postman.
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;

    const sql = `
        SELECT 
            Users_has_Tasks.Date, 
            Tasks.task
        FROM Users_has_Tasks
        JOIN Tasks ON Users_has_Tasks.Tasks_idTasks = Tasks.idTasks
        WHERE Users_has_Tasks.Users_idUsers = ?;
    `;

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user tasks:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
});


// Set up email transporter. Email service, user, and app pass in .env
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Function to be called for each power-fledge session. Assigns new fledge to current user.
const powerFledge = (userID) => {
    const sqlGetRandomTask = `SELECT idTasks, task FROM Tasks ORDER BY RAND() LIMIT 1;`;
    const sqlInsertTask = `INSERT INTO Users_has_Tasks (Users_idUsers, Tasks_idTasks, Date) VALUES (?, ?, CURDATE());`;
    
    db.query(sqlGetRandomTask, (err, taskResults) => {
        if (err) {
            console.error('Error fetching random task:', err);
            return
        }
        if (taskResults.length === 0) {
            console.error('No tasks found in the database.');
            return
        };

        const taskId = taskResults[0].idTasks;
        const taskDescription = taskResults[0].task;

        // Assign the unique task to the user
        db.query(sqlInsertTask, [userID, taskId], (err) => {
            if (err) {
                console.error(`Error assigning task to user ${userID}:`, err);
            } else {
                console.log(`Assigned fledge: ${taskDescription} to user ${userID}`)
                }
            })
        });
    }

// Function to Assign Unique Random Tasks and Email Users. This will be scheduled (see below) to be called every 24 hours.
const assignAndEmailTasks = () => {
    const sqlGetUsers = `SELECT idUsers, Email FROM Users;`;
    const sqlGetRandomTask = `SELECT idTasks, task FROM Tasks ORDER BY RAND() LIMIT 1;`;
    const sqlInsertTask = `INSERT INTO Users_has_Tasks (Users_idUsers, Tasks_idTasks, Date) VALUES (?, ?, CURDATE());`;

    db.query(sqlGetUsers, (err, userResults) => {
        if (err) {
            console.error('Error fetching users:', err);
            return;
        }
        if (userResults.length === 0) {
            console.error('No users found.');
            return;
        }

        userResults.forEach(user => {
            db.query(sqlGetRandomTask, (err, taskResults) => {
                if (err) {
                    console.error('Error fetching random task:', err);
                    return;
                }
                if (taskResults.length === 0) {
                    console.error('No tasks found in the database.');
                    return;
                }

                const taskId = taskResults[0].idTasks;
                const taskDescription = taskResults[0].task;

                // Assign the unique task to the user
                db.query(sqlInsertTask, [user.idUsers, taskId], (err) => {
                    if (err) console.error(`Error assigning task to user ${user.idUsers}:`, err);
                });

                // Send an email to the user with their unique task
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: user.Email,
                    subject: "Your adulting reminder from Fledge",
                    text: `Hello, \n\nHere is your unique fledge for today:\n"${taskDescription}"\n\nLet's fly!\n\n- The Fledge Team`
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error(`Error sending email to ${user.Email}:`, error);
                    } else {
                        console.log(`Email sent to ${user.Email}: ${info.response}`);
                    }
                });
            });
        });

        console.log(`Unique tasks assigned & emails sent to all users!`);
    });
};

// Schedule the task to run every 24 hours at noon
cron.schedule('0 12 * * *', () => {
    console.log('Running scheduled unique task assignment & email...');
    assignAndEmailTasks();
}, {
    timezone: "America/Edmonton"
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


