import { getState8, saveState8 } from "../controllers/state8.controller"
import express from "express"

const state8Router = express.Router()

state8Router.post("/save",saveState8)
state8Router.get("/", getState8)

module.exports = state8Router
export default state8Router