const express = require("express");
const adminModel = require("../root/db");
const {Router} = require("express");
const adminRouter = Router();

adminRouter.post("/signup",(req,res)=>{
    res.json({
        message : "Signup endpoint"
    })
})

adminRouter.post("/signin",(req,res)=>{
    res.json({
        message : "signin endpoint"
    })
})

adminRouter.post("/createCourse",(req,res)=>{
    res.json({
        message : "course created"
    })
})

adminRouter.put("/createCourse",(req,res)=>{
    res.json({
        message : "change price of course created"
    })
})

adminRouter.get("/createCourse",(req,res)=>{
    res.json({
        message : "give me all the course that ive created"
    })
})

module.exports={
    adminRouter : adminRouter
}