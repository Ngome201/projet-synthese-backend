import express, { Router } from "express"
import { getRegion, getRegionById } from "../controllers.entities/region.controller"

const RegionRouter: Router = express.Router()

RegionRouter.get("/", getRegion)
RegionRouter.get("/:id", getRegionById)

module.exports = RegionRouter
export default RegionRouter