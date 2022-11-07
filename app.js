const express = require('express');
const app = express();
const mysql = require('mysql2');
const connection = require('./database/database');


app.use(express.static('./public'));
app.use(express.urlencoded({extended:false}))


app.post('/createNewRecipe',(req,res)=>{
    const {name,ingredients,description} = req.body;
    console.log(name,ingredients,description);
    connection.execute('INSERT INTO recipe(name,ingredients,description) VALUES (?,?,?)',[name,ingredients,description],(err,results,fields)=>{
        console.log(results);
        console.log(fields);
    })
    res.end()
})



app.listen(5000,()=>{
    console.log('server running on port 5000');
})


