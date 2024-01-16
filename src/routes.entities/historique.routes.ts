import express from "express"
import { deleteHistorique, getHistorique, insertHistorique } from "../controllers.entities/historique.controller"

const HistRouter = express.Router()

HistRouter.get("/", getHistorique)
HistRouter.post("/insert", insertHistorique)
HistRouter.delete("/delete/:id", deleteHistorique)

module.exports = HistRouter
export default HistRouter