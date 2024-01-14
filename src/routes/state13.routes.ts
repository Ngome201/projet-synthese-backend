import { getState13, saveState13, state13 } from "../controllers/state13.controller"
import express from "express"

const state13Router = express.Router()

state13Router.post("/save",saveState13)
state13Router.get("/", getState13)
state13Router.get("/state13",state13)

module.exports = state13Router
export default state13Router