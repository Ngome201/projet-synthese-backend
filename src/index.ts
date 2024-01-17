import{Request,Response,NextFunction} from "express"
import { AppDataSource } from "./app"
import typeEtatRouter from "./routes.entities/typeEtat.routes"
import PaysRouter from "./routes.entities/pays.routes"
import RegionRouter from "./routes.entities/region.routes"
import DepartementRouter from "./routes.entities/departement.routes"
import CommuneRouter from "./routes.entities/commune.routes"
import CommuneCodeRouter from "./routes.entities/communecode.routes"
import LocaliteRouter from "./routes.entities/localite.routes"
import ressourceNatRouter from "./routes.entities/ressourceNaturelle.routes"
import ressourceFaunRouter from "./routes.entities/ressourceFaunique.routes"
import pbRessourceNatRouter from "./routes.entities/problemeRessourceNaturelle.routes"
import councilPresent from './routes.entities/councilpresentation.route'
import councilSignage from './routes.entities/councilsignage.route'
import state1Router from "./routes/state1.routes"
import state2Router from "./routes/state2.routes"
import state5Router from "./routes/state5.routes"
import state6Router from "./routes/state6.routes"
import state8Router from "./routes/state8.routes"
import state11Router from "./routes/state11.routes"
import state12Router from "./routes/state12.routes"
import state15Router from "./routes/state15.routes"
import state14Router from "./routes/state14.routes"
import state13Router from "./routes/state13.routes"
import state16Router from "./routes/state16.routes"
import state17Router from "./routes/state17.routes"
import HistRouter from "./routes.entities/historique.routes"

const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")


const state3Route = require("./routes/state3.routes")
const state4Route = require("./routes/state4.routes")
const state7Route = require("./routes/state7.routes")
const state9Route = require("./routes/state9.routes")
const state10Route = require("./routes/state10.routes")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json())
app.use((req : Request,res :Response,next : NextFunction)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept,Content-Type,Authorization');
   
    
    return next();
})
AppDataSource.initialize()
            .then(()=>console.log("connection established"))                          
            .catch((e)=>console.log(e))

app.use('/entity/typeEtat',typeEtatRouter)
app.use('/entity/pays',PaysRouter)
app.use('/entity/region',RegionRouter)
app.use('/entity/departement',DepartementRouter)
app.use('/entity/commune',CommuneRouter)
app.use('/entity/communecode',CommuneCodeRouter)
app.use('/entity/localite',LocaliteRouter)

app.use('/entity/problemeRessourceNaturelle',pbRessourceNatRouter)
app.use('/entity/ressourceNaturelle',ressourceNatRouter)
app.use('/entity/ressourceFaunique',ressourceFaunRouter)
app.use('/entity/councilPresentation',councilPresent)
app.use('/entity/councilSignage',councilSignage)

app.use('/entity/historique', HistRouter)

app.use('/edition/state1',state1Router)
app.use('/edition/state2',state2Router)
app.use('/edition/state3',state3Route)
app.use('/edition/state4',state4Route)
app.use('/edition/state5',state5Router)
app.use('/edition/state6',state6Router)


app.use('/edition/state7',state7Route)
app.use('/edition/state8',state8Router)
app.use('/edition/state9',state9Route)
app.use('/edition/state10',state10Route)
app.use('/edition/state11',state11Router)
app.use('/edition/state12',state12Router)

app.use('/edition/state13',state13Router)
app.use('/edition/state14',state14Router)
app.use('/edition/state15',state15Router)
app.use('/edition/state16',state16Router)
app.use('/edition/state17',state17Router)


app.listen(9000,()=> console.log("app running on port 9000"))
