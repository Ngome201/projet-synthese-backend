import express, { Router } from "express"
import { getDepartement, getDepartementById } from "../controllers.entities/departement.controller"

const DepartementRouter: Router = express.Router()

DepartementRouter.get("/", getDepartement)
DepartementRouter.get("/:id", getDepartementById)

module.exports = DepartementRouter
export default DepartementRouter