import { deleteProbleme, getProbleme, insertProbleme } from "../controllers.entities/problemeRessourceNaturelle.controller"
import express from "express"

const router = express.Router()

router.get("/", getProbleme)
router.post("/insert", insertProbleme)
router.delete("/delete/:id", deleteProbleme)

module.exports = router
export default router