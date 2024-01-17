import express, { Router } from "express"
import { getPays, getPaysById } from "../controllers.entities/pays.controller"

const PaysRouter: Router = express.Router()

PaysRouter.get("/", getPays)
PaysRouter.get("/:id", getPaysById)

module.exports = PaysRouter
export default PaysRouter