import express from "express"
import { deleteRessourceFaunique, getRessourceFaunique, insertRessourceFaunique } from "../controllers.entities/ressourceFaunique.controller"

const router = express.Router()

router.get("/", getRessourceFaunique)
router.post("/insert", insertRessourceFaunique)
router.delete("/delete/:id", deleteRessourceFaunique)

module.exports = router
export default router