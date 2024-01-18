import { getState22, saveState22, state22 } from "../controllers/state22.controller"
import express from "express"

const state22Router = express.Router()

state22Router.post("/save",saveState22)
state22Router.get("/state22",state22)
state22Router.get("/", getState22)

module.exports = state22Router
export default state22Router