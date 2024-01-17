import { getState9, saveState9, state9 } from "../controllers/state9.controller"

const express = require("express")
const app = express()
app.post("/save",saveState9)
app.get("/state9",state9)
app.get("/",getState9)


module.exports = app