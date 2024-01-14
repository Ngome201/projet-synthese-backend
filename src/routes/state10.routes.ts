import { getState10, saveState10, state10 } from "../controllers/state10.controller"

const express = require("express")
const app = express()
app.post("/save",saveState10)
app.get("/state10",state10)
app.get("/",getState10)


module.exports = app