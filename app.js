import mongoose from "mongoose";

await mongoose.connect('mongodb://127.0.0.1:27017/ICS'),
{ useNewURLParser: true, useUnifiedTopology: true}

const Student = mongoose.model("students", {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
})

// const newStudent = new Student ({
//     stdnum: '123456789',
//     fname: "Juan",
//     lname: "Dela Cruz",
//     age: 20,

// })

//let data = await newStudent.save();

//let data = await Student.find({age: 17});    //remove One if you want to see all


// update data
// let updateStudent = await Student.findOne({stdnum: "123456789"});
// updateStudent.age = 25;

// let updateStudent = await Student.updateOne(
//     {age: 17}
//     {$set: {fname: "John"}},

// )
// console.log(updateStudent),


// let data = await updateStudent.save();

// console.log(data);
// process.exit();

// let data = await Student.deleteMany(
//     {age: $gte: 17, $lte: 20}
// );

console.log(data);
process.exit();