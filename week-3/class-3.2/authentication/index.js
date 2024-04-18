const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
];

app.use(express.json());

//create a new signup endpoint, where people can signup and from here data(username,password) gets stored in the mongodb database

mongoose.connect("mongodb+srv://suneha15:python%40123@cluster0.qz2qdpw.mongodb.net/usersappnew")

const User = mongoose.model('Users', {name : String, email : String , password : String});

app.post("/signup", async function(req,res){
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({email : username});
  if(existingUser){
    return res.status(400).send("Username already exists");
  }
  
  const user = new User({
    name : name, 
    email : username,
    password : password
  });
  user.save();
  res.json({
    "msg": "user created successfully"
  })
})

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    //hard todo 0 - try to use to the find function in js
    
    let userExists = false;
    for(let i=0 ; i<ALL_USERS.length ;i++){
        if( ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
  
    if (!userExists(username, password)) {
      return res.status(403).json({
        msg: "User doesnt exist in our in memory db",
      });
    }
  
    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
      token,
    });
  });

app.get("/users", function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        //return a list of users other than this username
        res.json({
            users : ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false;
                }else{
                    return true;
                }
            })
        })
    }
    catch(err){
        return res.status(403).json({
            msg : "Invalid token!"
        })
    }
});

app.listen(3000,()=>{
    console.log("server is listening on port 3000!");
})