const mysql = require('mysql2/promise');
const  databaseConfig = require('../config/database');

async function CreateDatabase() {
    try {
        
        const connection = await mysql.createConnection({
            host: databaseConfig.host,
            user: databaseConfig.user,
            password: databaseConfig.password
        });

        await connection.query(
          `CREATE DATABASE IF NOT EXISTS ${databaseConfig.database}`  
        );

        await connection.end();

        console.log("Database Created!");

    } catch (error) {
        console.log("Error Create Database: ", error);
    }
}

CreateDatabase();