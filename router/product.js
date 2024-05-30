import { Router } from "express";
import {
    create,
    getAll,
    getOne,
    remove,
    update,
} from "../controllers/product.js";

const router = Router();

router.post("/products", create);
router.get("/products", getAll);
router.get("/products/:id", getOne);
router.delete("/products/:id", remove);
router.put("/products/:id", update);

export default router;
