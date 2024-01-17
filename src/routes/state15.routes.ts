import { getState15, saveState15, state15 } from "../controllers/state15.controller"
import express from "express"

const state15Router = express.Router()

state15Router.post("/save",saveState15)
state15Router.get("/state15",state15)
state15Router.get("/", getState15)

module.exports = state15Router
export default state15Router