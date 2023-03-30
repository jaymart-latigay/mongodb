import mongoose from 'mongoose';
await mongoose.connect('mongodb://127.0.0.1:27017/ICS'),
{useNewURLParser: true, useUnifiedTopology: true}

const Student = mongoose.model("students", {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
});



const homepage = (req, res) => {
    res.send("Welcome to the homepage");
    
}
const findStudents = async (req,res) => {   //causing error
    res.send(await Student.find({}));
}

const findStudentPost = async (req, res) => {
    res.send(await Student.find({age: req.body.age}));
}
const addStudentPost = async (req,res) => {
    try {
        const student = new Student({
            stdnum: req.body.stdnum,
            fnmae: req.body.fname,
            lname: req.body.fname,
            age: req.body.age,

        });
        const result = await student.save();
        res.send(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

export {homepage,findStudents, findStudentPost, addStudentPost};
