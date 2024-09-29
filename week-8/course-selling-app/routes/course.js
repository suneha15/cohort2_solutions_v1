const express = require("express");
const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/buy",(req,res)=>{
    res.json({
        message : "payment endpoint"
    })
})

courseRouter.get("/preview",(req,res)=>{
    res.json({
        message : "list of all courses"
    })
})

module.exports = {
    courseRouter : courseRouter
}