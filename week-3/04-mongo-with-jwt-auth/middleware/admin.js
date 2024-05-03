// Middleware for handling auth
const jwt = require("jsonwebtoken")
const secret = require("../index");

// Implement admin auth logic
// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

function adminMiddleware(req, res, next) {
    
    const token = req.headers.authorization;
    // Bearer nksfaof => ["Bearer", "nksfaof"]
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken,secret);
    if(decodedValue.username){
        next()
    }else{
        res.status(403).json({
            msg : "you are not authenticated"
        })
    }
}

module.exports = adminMiddleware;

//If you have a function, object, or any other value that you want to make available for use in other files, you can assign it to module.exports.

// the purpose of this step is -> we are sending jwt along with every request in the headers (instead of sending the username & password).

//jwt has a hashed version of your username, & that is what the middleware can use to extract your username

//so we verify this jwt in each request 
// jwt is generated in the /signin step
//jwt saves you the db call everytime.