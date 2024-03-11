const userModel = require("../../src/models/userModel");


//insert

console.log("Insert Test Case");
var data = {
    username: "Jerry",
    email:"Jerry@gmail.com",
    role:"member",
    password:"abcQQA12345"
}

var callback = (error, results, fields) => {
    if (error) {
        console.error("Error inserting data:", error);
    } else {
        console.log("Data inserted successfully:", results);
    }
    process.exit(); //Exiting NodeJS
}

userModel.insertNewUser(data, callback);



