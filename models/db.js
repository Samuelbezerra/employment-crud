const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EmployeeDB", {useNewUrlParser: true}, (err)=>{
    !err? 
        console.log("Mongoose Connected Succeeded."):
        console.log("Error in DB connection: " + err);
});

require("./employee.model");