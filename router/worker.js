import { Router } from "express";
import {
    create,
    getAll,
    getOne,
    remove,
    update,
} from "../controllers/worker.js";

const router = Router();

router.post("/workers", create);
router.get("/workers", getAll);
router.get("/workers/:id", getOne);
router.delete("/workers/:id", remove);
router.put("/workers/:id", update);

export default router;
