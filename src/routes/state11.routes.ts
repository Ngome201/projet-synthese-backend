import { getState11, saveState11, state11 } from "../controllers/state11.controller"
import express from "express"

const state11Router = express.Router()

state11Router.post("/save",saveState11)
state11Router.get("/state11",state11)
state11Router.get("/", getState11)

module.exports = state11Router
export default state11Router