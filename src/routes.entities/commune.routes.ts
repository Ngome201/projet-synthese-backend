import express, { Router } from "express"
import { getCommune, getCommuneById } from "../controllers.entities/commune.controller"

const CommuneRouter: Router = express.Router()

CommuneRouter.get("/", getCommune)
CommuneRouter.get("/:id", getCommuneById)

module.exports = CommuneRouter
export default CommuneRouter