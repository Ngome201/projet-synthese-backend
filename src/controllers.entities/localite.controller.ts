import { Localite } from "../entities/Localite"
import { AppDataSource } from "../app"
import { Request, Response } from "express"
import { MyZone } from "../types"

const localiteRepo = AppDataSource.getRepository(Localite)

export const getLocalite  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_localite) {code = parseInt(req.query.code_localite.toString()); critere = MyZone.Localite}
    else if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}

    try {
        if(critere == MyZone.Localite){
            let localite: Localite = await localiteRepo.findOne({where: {code_localite: code}})
            res.status(201).json(localite)
        }
        else if(critere == MyZone.Commune){
            let listeLocalite: Localite[] = await localiteRepo.find({where: {code_commune: code}})
            res.status(201).json(listeLocalite)
        }
        else{
            let listeLocalite: Localite[] = await localiteRepo.find()
            res.status(201).json(listeLocalite)            
        }
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getLocaliteById  = async (req: Request, res : Response) => {

    try {
        let localite: Localite = await localiteRepo.findOne({where: {id: req.params.id}})
        res.status(201).json(localite)
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}