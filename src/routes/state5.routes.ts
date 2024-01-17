import { getState5 } from "../controllers/state5.controller"
import express from "express"

const state5Router = express.Router()

state5Router.get("/", getState5)

module.exports = state5Router
export default state5Router