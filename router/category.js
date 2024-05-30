import { Router } from "express";
import {
    create,
    getAll,
    getOne,
    remove,
    update,
} from "../controllers/category.js";

const router = Router();

router.get("/categories", getAll);
router.get("/categories/:id", getOne);
router.post("/categories", create);
router.delete("/categories/:id", remove);
router.put("/categories/:id", update);

export default router;
