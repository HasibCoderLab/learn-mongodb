import express from "express"
import mongoose from "mongoose"
const app = express();
const port = 8000;

const mongoURL =
  "mongodb+srv://codermohammadhasibhasan_db_user:ANmSg1GmMnaKoCci@cluster0.inxzqhm.mongodb.net/coderhasib?retryWrites=true&w=majority&appName=Cluster0";

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
