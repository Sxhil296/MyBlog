// import mysql from 'mysql'
// import mysql from 'mysql2'

// export const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"password",
//     database: "blog"
// })



import dotenv from 'dotenv';
import mysql from 'mysql2';

// Load environment variables from .env
dotenv.config();


export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
