const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://suneha15:python%40123@cluster0.qz2qdpw.mongodb.net/coursera-app")
console.log("connected to database");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email : { type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String,
})

const adminSchema = new Schema({
    email : { type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String,
})

const courseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId : ObjectId  //this schema refers to the admin schema
})

const purchaseSchema = new Schema({
    userId : ObjectId,
    courseId : ObjectId, //it refers to the user schema

})

const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchases",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}