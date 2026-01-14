import express from "express"
import mongoose from "mongoose"
import User from "./models/user.model.js";
const app = express();
const port = 8000;

app.use(express.json());

const mongoURL =
  "mongodb+srv://mohammodhasibhasan_db_user:sdzYQTnDqVCMBsLZ@cluster0.xh5qyek.mongodb.net/learnDB";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL)

    console.log("DB Connected");
  } catch (error) {
    console.log("Database Error:", error.message);
  }
};

app.get("/", (req, res) => {
  res.send("Hello");
});

// ====== Post Route ======
app.post("/create", async (req, res) => {
  try {
    let { name, age, email, userName } = req.body
   const newUser = await  User.create({
      name,
      age,
      email,
      userName
    });
    res.status(201).json({message:"Usre Created"})
  } catch (error) {
return res.status(400).json({message:error})
  }
});

// ====== Get Route ======

// app.get( "/read",  async( req,res) =>{
//    try {
//     const users = await User.find();
//       return  res.status(200).json(users)
//    } catch (error) {
//      return  res.status(200).json({message:"user not found"})
  
//    }
// });

// ====== Condition Route ======

app.get( "/read",  async( req,res) =>{
   try {
    const users = await User.find({name :{$ne:"Hasib"}});
      return  res.status(200).json(users)
   } catch (error) {
     return  res.status(200).json({message:"user not found"})
  
   }
});


// ====== Get Route  find User Name ======

app.get( "/read/:userName",  async( req,res) =>{
   try {
    const users = await User.findOne({userName:req.params.userName});
      return  res.status(200).json(users)
   } catch (error) {
     return  res.status(200).json({message:"user not found"})
  
   }
});
 
app.listen(port, () => {
  connectDB();
  console.log(`started at ${port}`);
});
