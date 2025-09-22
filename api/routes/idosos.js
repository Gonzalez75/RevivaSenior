import express from "express"
import { getIdosos } from "../controllers/idosos"
const router = express.Router()

router.get("/", getIdosos)

export default router