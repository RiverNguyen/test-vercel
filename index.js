import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "mongoose";
import workerRouter from "./router/worker.js";
import productRouter from "./router/product.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const post = process.env.PORT;

connect(process.env.DB_URI);

app.listen(post, () => {
    console.log(`Server is running on port http://localhost:${post}`);
});

app.use("/api", productRouter);
app.use("/api", workerRouter);
