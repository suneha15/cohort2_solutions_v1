const express = require("express");
const {Router} = require("express");
const userRouter = Router(); //its a built in middleware function in express

userRouter.post("/signup",(req,res)=>{
    res.json({
        message : "Signup endpoint"
    })
})

userRouter.post("/signin",(req,res)=>{
    res.json({
        message : "signin endpoint"
    })
})

userRouter.get("/purchases",(req,res)=>{
    res.json({
        message : "purchased courses"
    })
})

module.exports={
    userRouter : userRouter
}