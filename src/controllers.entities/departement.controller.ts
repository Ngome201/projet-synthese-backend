import { Departement } from "../entities/Departement"
import { AppDataSource } from "../app"
import { Request, Response } from "express"
import { MyZone } from "../types"

const departementRepo = AppDataSource.getRepository(Departement)

export const getDepartement  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}

    try {
        if(critere == MyZone.Departement){
            let departement: Departement = await departementRepo.findOne({where: {code_departement: code}})
            res.status(201).json(departement)
        }
        else if(critere == MyZone.Region){
            let listeDepartement: Departement[] = await departementRepo.find({where: {code_region: code}})
            res.status(201).json(listeDepartement)
        }
        else{
            let listeDepartement: Departement[] = await departementRepo.find()
            res.status(201).json(listeDepartement)            
        }
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getDepartementById  = async (req: Request, res : Response) => {

    try {
        let departement: Departement = await departementRepo.findOne({where: {id: req.params.id}})
        res.status(201).json(departement)
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}