import express, { Router } from "express"
import { getCommuneCode } from "../controllers.entities/communecode.controller"

const CommuneCodeRouter: Router = express.Router()

CommuneCodeRouter.get("/", getCommuneCode)

module.exports = CommuneCodeRouter
export default CommuneCodeRouter