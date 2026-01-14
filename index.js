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


app.listen(port, () => {
  connectDB();
  console.log(`started at ${port}`);
});
