const express = require("express");
const adminModel = require("../root/db");
const {Router} = require("express");
const {jwt} = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "56789"

const adminRouter = Router();

//zod, jwt, bcrypt

adminRouter.post("/signup", async  (req,res)=>{
    const { email, password, firstname, lastname} = req.body;

    await adminModel.create({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
    })

    res.json({
        message : "Signup endpoint"
    })
})

adminRouter.post("/signin",async (req,res)=>{
    const { email, password} = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if(admin){
        const token = jwt.sign({
            id : admin._id 
        }, JWT_ADMIN_PASSWORD)

        res.json({
            token: token
        })
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
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

adminRouter.get("/course/bulk",(req,res)=>{
    res.json({
        message : "give me all the course that ive created"
    })
})

module.exports={
    adminRouter : adminRouter
}