// console.log("Hello");c
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();

const app = express();

 const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("hello world");
});
app.get("/data",(req,res)=>{
    res.send({name:"test",type: "test"})
});
app.listen( port,console.log("app is runnng"));
(async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  })();







