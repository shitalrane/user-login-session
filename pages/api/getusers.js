import mysql from "mysql2/promise"

export default async function handler(req, res) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'user_db',
        password: 'root'
    });

    try {
        // simple query
        console.log(1)
        const query = "SELECT * FROM Users"
        const values = []
        const [results] = await connection.execute(query, values);
        connection.end()
        console.log(3)
        res.status(200).json({ response: results })
    } catch (error) {
        console.log("error")
        console.log(error)
        res.status(400).json({ err: 1 })
    }
    


}