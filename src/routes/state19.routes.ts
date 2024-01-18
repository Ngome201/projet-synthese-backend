import { getState19, saveState19, state19 } from "../controllers/state19.controller"
import express from "express"

const state19Router = express.Router()

state19Router.post("/save",saveState19)
state19Router.get("/state19",state19)
state19Router.get("/", getState19)

module.exports = state19Router
export default state19Router