import express from "express"
import { getState6 } from "../controllers/state6.controller"

const state6Router = express.Router()

state6Router.get("/", getState6)

module.exports = state6Router
export default state6Router