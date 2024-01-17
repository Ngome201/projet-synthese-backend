import { Pays } from "../entities/Pays"
import { AppDataSource } from "../app"
import { Request, Response } from "express"

const paysRepo = AppDataSource.getRepository(Pays)

export const getPays  = async (req: Request, res : Response) => {
    let code_pays: number = -1

    if(req.query.code_pays) {code_pays = parseInt(req.query.code_pays.toString());}

    try {
        if(code_pays == -1){
            let listePays: Pays[] = await paysRepo.find()
            res.status(201).json(listePays)
        }
        else{
            let pays: Pays = await paysRepo.findOne({where: {code_pays}})
            res.status(201).json(pays)
        }
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getPaysById  = async (req: Request, res : Response) => {

    try {
        let pays: Pays = await paysRepo.findOne({where: {id: req.params.id}})
        res.status(201).json(pays)
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}