const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin , Course } = require("../db");
const router = express.Router();

/*a router is a middleware that helps in organizing and managing routes in an application. It allows developers to define multiple routes and their corresponding handlers in separate files or modules, making the codebase more modular and easier to maintain. Routers help in structuring larger applications by breaking them down into smaller, more manageable components.
*/
// Admin Routes

//does not mean, this handles the /signup endpoint
//it handles /admin/signup

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if a user with this username already exists
    //if a user with this username already exist then we should stop the request
    //if the user doesnt exist then we should add it to the db

    await Admin.create({
        username : username,
        password : password
    })
    res.json({
        msg : "Admin created successfully"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    
    //use zod for input validation otherwise user can send you anything in the body other than as defined in readme

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse)
    res.json({
        message : "Course created successfully",
        courseId : newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    console.log(response);
    res.json({
        courses : response
    })
});

module.exports = router;