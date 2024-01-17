import { getState16, saveState16, state16 } from "../controllers/state16.controller"
import express from "express"

const state16Router = express.Router()

state16Router.post("/save",saveState16)
state16Router.get("/state16",state16)
state16Router.get("/", getState16)

module.exports = state16Router
export default state16Router