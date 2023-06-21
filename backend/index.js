import express from "express";

import mysql from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const db=mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Vortex@123",
    database: "test"

})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.get('/api/get',(req, res) => {
    const sqlSelect="SELECT * FROM reviews";
    db.query(sqlSelect,(err, results) => {
        res.send(results);
    })
})
app.post('/api/insert',(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const student_name = req.body.student_name;

    const sqlInsert="INSERT INTO reviews (title, description,student_name) VALUES (?,?,?)";
    db.query(sqlInsert,[title, description,student_name],(err,result)=>{
       console.log(err);
    })
})

app.listen(3001,()=>{
console.log('listening on 3001');
});