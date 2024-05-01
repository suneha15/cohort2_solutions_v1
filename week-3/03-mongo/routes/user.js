const { Router } = require("express");
const router = Router();
const { User , Course } = require("../db")
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username : username,
        password : password
    })
    res.json({
        msg : "user created successfully"
    })
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    console.log(response);
    res.json({
        courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    User.updateOne({
        username : username
    }, {
        purchasedCourses : {
            "$push" : courseId
        }
    });
    res.json({
        message : "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router