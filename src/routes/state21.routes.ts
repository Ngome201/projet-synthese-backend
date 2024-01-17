import { getState21, saveState21, state21 } from "../controllers/state21.controller"
import express from "express"

const state21Router = express.Router()

state21Router.post("/save",saveState21)
state21Router.get("/state21",state21)
state21Router.get("/", getState21)

module.exports = state21Router
export default state21Router