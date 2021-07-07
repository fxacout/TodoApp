import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieparser from "cookie-parser";
import mongoose from 'mongoose';
const app = express();

dotenv.config({
    path: './development.env'
});
mongoose.connect('mongodb://localhost:27017/todoapp',
 {useNewUrlParser: true, useUnifiedTopology: true},
).then((value) =>{
    console.log(`Connected successfully`);
}).catch((error)=> console.error(JSON.stringify(error)));

app.use(express.json());
app.use(cors());
app.use(cookieparser());


export default app;