import express, { Router } from "express"
import { getLocalite, getLocaliteById } from "../controllers.entities/localite.controller"

const LocaliteRouter: Router = express.Router()

LocaliteRouter.get("/", getLocalite)
LocaliteRouter.get("/:id", getLocaliteById)

module.exports = LocaliteRouter
export default LocaliteRouter