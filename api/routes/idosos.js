import express from "express"
import { getIdosos } from "../controllers/idosos.js"
const router = express.Router()

router.get("/", getIdosos)

export default router