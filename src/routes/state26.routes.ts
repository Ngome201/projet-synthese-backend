import { getState26, saveState26, state26 } from "../controllers/state26.controller"
import express from "express"

const state26Router = express.Router()

state26Router.post("/save",saveState26)
state26Router.get("/state26",state26)
state26Router.get("/", getState26)

module.exports = state26Router
export default state26Router