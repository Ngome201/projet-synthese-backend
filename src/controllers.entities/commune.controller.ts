import { Commune } from "../entities/Commune"
import { AppDataSource } from "../app"
import { Request, Response } from "express"
import { MyZone } from "../types"

const communeRepo = AppDataSource.getRepository(Commune)

export const getCommune  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}

    try {
        if(critere == MyZone.Commune){
            let commune: Commune = await communeRepo.findOne({where: {code_commune: code}})
            res.status(201).json(commune)
        }
        else if(critere == MyZone.Departement){
            let listeCommune: Commune[] = await communeRepo.find({where: {code_departement: code}})
            res.status(201).json(listeCommune)
        }
        else{
            let listeCommune: Commune[] = await communeRepo.find()
            res.status(201).json(listeCommune)            
        }
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getCommuneById  = async (req: Request, res : Response) => {

    try {
        let commune: Commune = await communeRepo.findOne({where: {id: req.params.id}})
        res.status(201).json(commune)
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}