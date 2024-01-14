import express from "express"
import { deleteTypeEtat, getTypeEtat, insertTypeEtat } from "../controllers.entities/typeEtat.controller"

const router = express.Router()

router.get("/", getTypeEtat)
router.post("/insert", insertTypeEtat)
router.delete("/delete/:id", deleteTypeEtat)

module.exports = router
export default router