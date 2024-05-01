const {Admin} = require("../db/index")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username : username,
        password : password
    })
    .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg : "User doesn't exist"
            })
        }
    })

    //check if this username exists in the admin database with the given username and password
    //1. I've to get the admin model at the top

}

module.exports = adminMiddleware;