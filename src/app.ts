import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieparser from "cookie-parser";

const app = express();

dotenv.config({
    path: './development.env'
});

app.use(express.json());
app.use(cors());
app.use(cookieparser());
export default app;