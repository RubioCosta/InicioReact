const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function CreateUser(req, res){
    const { name, password } = req.query;

    try {
    
        const connection = await mysql.createConnection(databaseConfig);

        const insertUser = `INSERT INTO user (name, password) VALUES (?, ?)`;
        const data = [name, password];

        await connection.query(insertUser, data);

        connection.end();

        console.log("User created!");

        res.status(201).send({
            message: 'success'
        });

    } catch (error) {
        res.status(500).send({
           message: 'Error adding user',
           body: error.message 
        });
    }
}

module.exports = {
    CreateUser
}