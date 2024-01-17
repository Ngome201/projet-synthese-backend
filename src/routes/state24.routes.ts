import { getState24, saveState24, state24 } from "../controllers/state24.controller"
import express from "express"

const state24Router = express.Router()

state24Router.post("/save",saveState24)
state24Router.get("/state24",state24)
state24Router.get("/", getState24)

module.exports = state24Router
export default state24Router