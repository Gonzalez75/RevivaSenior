import express from "express";
import { getIdosos, addIdoso, updateIdoso } from "../controllers/idosos.js";

const router = express.Router();

router.get("/", getIdosos);
router.post("/", addIdoso);
router.put("/:id", updateIdoso);

export default router;
