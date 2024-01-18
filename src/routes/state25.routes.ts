import { getState25, saveState25, state25 } from "../controllers/state25.controller"
import express from "express"

const state25Router = express.Router()

state25Router.post("/save",saveState25)
state25Router.get("/state25",state25)
state25Router.get("/", getState25)

module.exports = state25Router
export default state25Router