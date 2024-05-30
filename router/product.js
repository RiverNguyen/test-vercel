import { Router } from "express";
import { getAllProduct } from "../controllers/product.js";

const router = Router();

router.get("/products", getAllProduct);

export default router;
