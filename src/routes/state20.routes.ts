import { getState20, saveState20, state20 } from "../controllers/state20.controller"
import express from "express"

const state20Router = express.Router()

state20Router.post("/save",saveState20)
state20Router.get("/state20",state20)
state20Router.get("/", getState20)

module.exports = state20Router
export default state20Router