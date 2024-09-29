const express = require("express");
const mongoose = require("mongoose")
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");

const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);

async function main() {
    await mongoose.connect("")
    app.listen(3000,()=>{
        console.log("server is listening to port 3000")
    });
}

main();