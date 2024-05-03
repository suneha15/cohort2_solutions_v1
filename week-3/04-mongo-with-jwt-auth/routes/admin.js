const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const {JWT_SECRET} = require("../config")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if a username with this username already exists
    await Admin.create({
        username : username,
        password : password
    })
    res.json({
        msg : "Admin created successfully!"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
   
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.find({
        username,
        password
    })
    if (admin){
        const token =  jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.status(411).json({
            message : "Incorrect emailid or password"
        })
    }
  
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;