const userModel = require("../../src/models/userModel");

//delete
data = {
    userid:1
}
callback = (error, results, fields) => {
    if (error) {
        console.error("Error deleting data:", error);
    } else {
        console.log("Data deleted successfully:", results);
    }
    process.exit();
}

userModel.deleteUserById(data,callback);
