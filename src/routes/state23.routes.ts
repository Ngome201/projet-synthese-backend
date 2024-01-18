import { getState23, saveState23, state23 } from "../controllers/state23.controller"
import express from "express"

const state23Router = express.Router()

state23Router.post("/save",saveState23)
state23Router.get("/state23",state23)
state23Router.get("/", getState23)

module.exports = state23Router
export default state23Router