import { insertRessourceNaturelle, getRessourceNaturelle
, deleteRessourceNaturelle} from "../controllers.entities/ressourceNaturelle.controller"
import express from "express"

const router = express.Router()

router.get("/", getRessourceNaturelle)
router.post("/insert", insertRessourceNaturelle)
router.delete("/delete/:id", deleteRessourceNaturelle)

module.exports = router
export default router