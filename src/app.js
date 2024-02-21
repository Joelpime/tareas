const express = require("express");
const {engine} = require("express-handlebars");
const myconnection = require("express-myconnection");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const tasksRoutes = require("./routes/tasks");

const app = express();
app.set("port",3000);

app.listen(app.get("port"),() => {
    console.log("Escuchando en el puerto", app.get("port"));
})