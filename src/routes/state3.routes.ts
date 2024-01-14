import { saveState3, getState3, getAllState3 } from "../controllers/state3.controller"
const express = require("express")
const app = express()

app.get("/",getState3)
app.get("/all",getAllState3)

app.post("/save",saveState3)  

module.exports = app