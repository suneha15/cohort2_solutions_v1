const { Router, raw } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink, 
        price
    });
    console.log(newCourse)
    res.json({
        msg : "Course created successfully",
        courseId : newCourse._id
    })

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;