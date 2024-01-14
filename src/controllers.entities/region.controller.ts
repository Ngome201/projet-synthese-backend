import { Region } from "../entities/Region"
import { AppDataSource } from "../app"
import { Request, Response } from "express"
import { MyZone } from "../types"

const regionRepo = AppDataSource.getRepository(Region)

export const getRegion  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        if(critere == MyZone.Region){
            let region: Region = await regionRepo.findOne({where: {code_region: code}})
            res.status(201).json(region)
        }
        else if(critere == MyZone.Pays){
            let listeRegion: Region[] = await regionRepo.find({where: {code_pays: code}})
            res.status(201).json(listeRegion)
        }
        else{
            let listeRegion: Region[] = await regionRepo.find()
            res.status(201).json(listeRegion)            
        }
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getRegionById  = async (req: Request, res : Response) => {

    try {
        let region: Region = await regionRepo.findOne({where: {id: req.params.id}})
        res.status(201).json(region)
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}