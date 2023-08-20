const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor",
    database: "nodejs"
});

connection.connect(function(error) {
    if (error) throw error;
    else console.log("Connection established successfully");
});

app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var username = req.body.username;
    var password = req.body.password; 
    connection.query("SELECT * FROM loginuser WHERE username=? AND userpass=?", [username, password], function(error, result, fields) {
        if (error) throw error;
        if (result.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/");
        }
    });
});

app.get("/welcome", function(req, res) {
    res.sendFile(__dirname + "/welcome.html"); 
});

app.listen(3000, function() {
    console.log("App listening on port 4000");
});
