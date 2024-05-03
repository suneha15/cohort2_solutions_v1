const jwt = require("jsonwebtoken");
const secret = require("../index");

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken,secret);

    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            msg : "You are not authenticated!"
        })
    }
}

module.exports = userMiddleware;

//when you're signing the jwt in the signin endpoint you should mention - username , type : admin || "user"

//authentication , authorization -> eventhough the username can be same but the authorization they have might be different

//eg : (decodedValue.username && decodedValue.type = 'user')