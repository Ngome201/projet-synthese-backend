import express from "express"
import { getState1 } from "../controllers/state1.controller"

const state1Router = express.Router()

state1Router.get("/", getState1)

module.exports = state1Router
export default state1Router