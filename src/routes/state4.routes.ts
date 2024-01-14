import {  saveState4,  state4,getState4 } from "../controllers/state4.controller"
const express = require("express")
const app = express()
app.get("/",getState4)
app.get("/all",state4)
app.post("/save",saveState4)  
module.exports = app
