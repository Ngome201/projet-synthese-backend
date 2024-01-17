import { getState7, saveState7, state7 } from "../controllers/state7.controller"

const express = require("express")
const app = express()
app.post("/save",saveState7)
app.get("/all",state7)
app.get("/",getState7)


module.exports = app