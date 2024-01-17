import { getState14, saveState14, state14 } from "../controllers/state14.controller"
import express from "express"

const state14Router = express.Router()

state14Router.post("/save",saveState14)
state14Router.get("/state14",state14)
state14Router.get("/", getState14)

module.exports = state14Router
export default state14Router