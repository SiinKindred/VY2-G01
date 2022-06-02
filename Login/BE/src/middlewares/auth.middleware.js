const jwt = require('jsonwebtoken');

module.exports = {
    verifyAdmin: async (req, res, next) => {
        const authHeader = req.headers.authorization;
     
        if (authHeader) {
            const token = authHeader.split(" ")[1];
            jwt.verify(token, "mySecretKey", (err, dataCustomer) => {
                if (err) {
                    return res.status(401).json("token không được định nghĩa");
                } else {
                    console.log(dataCustomer);
                    if (dataCustomer.isAdmin) {
                        req.customer = dataCustomer;
                        next();
                    }
                    else {
                        res.json(
                         {   success : false,
                           msg : "Bạn không phải ADMIN"});
                    }

                }
            });
        } else {
            res.json({
                success : false,
                msg : "You are not authenticated"})
        }
    },
    verifyUser: async (req, res, next) => {
        
        const authHeader = req.headers.authorization;
        
        if (authHeader) {
            console.log(authHeader);
            const token = authHeader.split(" ")[1];
            jwt.verify(token, "mySecretKey", (err, data) => {
                if (err) {
                    return res.json(
                        {"success" : false,
                         msg : "Token không được định nghĩa"});
                } else {
                    req.user = data;
                    next();
                 }
            });
        } else {
            res.json(
                {
                    "success": false,
                    "msg" : "Token không được định nghĩa"
                })
        }
    }
}