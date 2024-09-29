const express = require("express");
const {Router} = require("express");
const {userModel} = require("../db")
const {jwt} = require("jsonwebtoken");
const JWT_USER_PASSWORD = "12345"

const userRouter = Router(); //its a built in middleware function in express

userRouter.post("/signup",async (req,res)=>{
    const { email, password, firstName, lastName } = req.body;
    
    //todo : adding zod validation
    //todo : hash the password so plaintext password is not stored in the DB
    //todo : put inside try catch block
    try{
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastname
        })
    }catch(e){
      console.log(e) 
    }

    res.json({
        message : "Signup succeeded"
    })
})

userRouter.post("/signin",async (req,res)=>{
    const { email, password } = req.body;

    //todo : ideally password should be hashed ,and hence you cannot compare the user provided password and the database password

    const user = await userModel.findOne({
        email: email,
        password: password
    });

    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD)

        //Do cookie logic

        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message : "incorrect credentials"
        })
    }
})

userRouter.get("/purchases",(req,res)=>{
    res.json({
        message : "purchased courses"
    })
})

module.exports={
    userRouter : userRouter
}