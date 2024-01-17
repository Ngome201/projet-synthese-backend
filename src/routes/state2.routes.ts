import express from "express"
import { getState2 } from "../controllers/state2.controller"

const state2Router = express.Router()

state2Router.get("/", getState2)

module.exports = state2Router
export default state2Router