import { getState12 } from "../controllers/state12.controller"
import express from "express"

const state12Router = express.Router()

state12Router.get("/", getState12)

module.exports = state12Router
export default state12Router