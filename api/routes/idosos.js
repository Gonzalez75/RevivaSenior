import express from "express";
import {
  getIdosos,
  addIdoso,
  updateIdoso,
  deleteIdoso,
} from "../controllers/idosos.js";
const router = express.Router();

router.get("/", getIdosos);
router.post("/", addIdoso);
router.put("/:id", updateIdoso);
router.delete("/:id", deleteIdoso);

export default router;
