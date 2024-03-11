const model = require("../../src/models/userModel");
//update

data = {
    email:"Jerry@gmail.com",
    password:"abcQQA12345",
    userid:1
}

callback = (error, results, fields) => {
    if (error) {
        console.error("Error inserting data:", error);
    } else {
        console.log("Data updated successfully:", results);
    }
    process.exit();
}

userModel.updateUserById(data,callback);
