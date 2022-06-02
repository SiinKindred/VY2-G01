const jwt = require("jsonwebtoken");
module.exports = {
    generateAccessToken :  (customer) => {

       // tạo ra token
        return jwt.sign({ user_id: customer['user_id'], type: customer['type'] ,username : customer['username']}, "mySecretKey", {
            expiresIn: "90 days"
        });
    
    },
    // //
    generateRefreshToken : (customer) => {
        return jwt.sign({ id: customer._id, isAdmin: customer['isAdmin'] }, "myRefreshToken");
    
    }
}