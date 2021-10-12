const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

var connnection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'restaurant'
});

app.get('/menu',getMenu);

function getMenu(req,res) {
    
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'restaurant'
    });

    connection.connect();

    var myQuery = "SELECT nombre_plato, precio_plato, " + "created_date, modified_date " + "FROM menu;" 

    connection.query(myQuery, function(error, results, fields){
        res.send(results);
        connection.end();
    });
}

app.listen(4000,function(){
    console.log("El servidor esta en el puerto 4000");
})