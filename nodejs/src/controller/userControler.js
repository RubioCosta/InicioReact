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

async function GetAllUsers(req, res) {

    try {
        
        const connection  = await mysql.createConnection(databaseConfig);

        const [users] = await connection.query("SELECT * FROM user");

        await connection.end();

        res.status(200).json(users);

    } catch(error) {
        res.status(500).send({
            message: "Error getting users!",
            body: error.message
        });
    }

}

async function GetUserById(req, res) {
    const { id } = req.params;

    try {
    
        const connection = await mysql.createConnection(databaseConfig);

        const [user] = await connection.query("SELECT * FROM user WHERE id = ?", [id]);

        await connection.end();

        res.status(200).json(user);

    } catch(error) {
        res.status(500).send({
            message: "Error get user!",
            body: error.message
        });
    }


}

async function UpdateUser(req, res) {

    const { id } = req.params;
    const { name, password } = req.query;

    try {

        const connection = await mysql.createConnection(databaseConfig);

        const updateUser = "UPDATE user SET name = ?, password = ? WHERE id = ?"
        const data = [name, password, id]

        await connection.query(updateUser, data);

        await connection.end();

        res.status(200).json("Update success!");

    } catch (error) {
        res.status(500).send({
            message: "Error updating user!",
            body: error.message
        });
    }



}

module.exports = {
    CreateUser,
    GetAllUsers,
    GetUserById,
    UpdateUser
}