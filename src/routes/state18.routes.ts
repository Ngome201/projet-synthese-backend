import { getState18, saveState18, state18 } from "../controllers/state18.controller"
import express from "express"

const state18Router = express.Router()

state18Router.post("/save",saveState18)
state18Router.get("/state18",state18)
state18Router.get("/", getState18)

module.exports = state18Router
export default state18Router