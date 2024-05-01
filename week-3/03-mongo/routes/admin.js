const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const { Admin } = require("../db");

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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    console.log("hi suneha");
    res.json({
        msg : "hi there"
    })
});

module.exports = router;