require("./models/db");

const express = require("express");
const Handlebars = require('handlebars')
const path = require("path");
const exphbs = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyParser = require("body-parser");

const employeeController = require("./controllers/employeeController");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("views", path.join(__dirname, "/views/"));
app.engine("hbs", exphbs.engine({ extname: "hbs", defaultLayout: "mainLayout", layoutsDir: __dirname + "/views/layouts/", handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set("view engine", "hbs");

app.listen(3000, ()=>{
    console.log("Express server started at port : 3000");
});

app.use("/employee", employeeController);
