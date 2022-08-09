import mysql from "mysql2/promise"

export default async function handler(req, res) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'user_db',
        password: 'root'
    });

    try {

        const body = req.body
        console.log(body)
     
        const query = "UPDATE Users SET feedback=? WHERE name=? and email_id=? and mobile_no=?"
        const values = [body.feedback_text, body.name, body.email, body.mobile_no]
        await connection.execute(query, values);
        connection.end()

        res.status(200).json({ err: 0})
    } catch (error) {
        console.log("error")
        res.status(400).json({ err: 1 })
    }
}