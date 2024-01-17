import { getState17, saveState17, state17 } from "../controllers/state17.controller"
import express from "express"

const state17Router = express.Router()

state17Router.post("/save",saveState17)
state17Router.get("/state17",state17)
state17Router.get("/", getState17)

module.exports = state17Router
export default state17Router