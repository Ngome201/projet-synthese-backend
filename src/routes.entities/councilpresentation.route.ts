import { deleteCouncilPresentation, getCouncilPresentation, insertCouncilPresentation } from "../controllers.entities/councilpresentation.controller"
import express from "express"

const router = express.Router()

router.get("/", getCouncilPresentation)
router.post("/insert", insertCouncilPresentation)
router.delete("/delete/:id", deleteCouncilPresentation)

module.exports = router
export default router