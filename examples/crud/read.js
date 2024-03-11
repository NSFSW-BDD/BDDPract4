const userModel = require("../../src/models/userModel");

//--------------------------------------------

//select

console.log("Select Test Case");
var callback = (error, results, fields) => {
    if (error) {
        console.error("Error reading data:", error);
    } else {
        console.log("Results:", results);
    }
    process.exit();
}

userModel.selectAllUsers(callback);