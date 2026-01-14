import express from "express"
import dotenv from "dotenv"
dotenv.config()
import User from "./models/user.model.js";
import userRouter from "./routes/user.routes.js";
import connectDB from "./config/db.js";
const app = express();
const port = 8000;

app.use(express.json());
app.use("/",userRouter)



app.listen(port, () => {
  connectDB()
  console.log(`started at ${port}`);
});
