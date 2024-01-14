import { deleteCouncilSignage, getCouncilSignage, insertCouncilSignage } from "../controllers.entities/councilsignage.controller"
import express from "express"

const router = express.Router()

router.get("/", getCouncilSignage)
router.post("/insert", insertCouncilSignage)
router.delete("/delete/:id", deleteCouncilSignage)

module.exports = router
export default router