import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import productRouter from "./router/product.js";
import categoryRouter from "./router/category.js";

dotenv.config();
const app = express();
app.use(express.json());

const post = process.env.PORT;

connect(process.env.DB_URI);

app.listen(post, () => {
    console.log(`Server is running on port http://localhost:${post}`);
});

app.use("/api", productRouter);
app.use("/api", categoryRouter);
