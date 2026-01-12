import express from "express"
import mongoose from "mongoose"
const app = express();
const port = 8000;

const mongoURL =
  "mongodb+srv://codermohammadhasibhasan_db_user:Gdkt9eiVCfPKIGI1@cluster0.zelxsxr.mongodb.net/learn";

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

app.listen(port, () => {
  connectDB();
  console.log(`started at ${port}`);
});
