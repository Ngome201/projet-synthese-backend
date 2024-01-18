import { Request,Response } from "express"
import { State26Service } from "../services"
import { State26 } from "../entities"
import { MyZone, StateDTO26 } from "../types"

const state26Service = new State26Service()
let list

export const getState26 = async (req:Request,res:Response)=>{
    let code: number = -26, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state26Service.findByZone(critere,code)
        let state :StateDTO26 = {
            type_zone: MyZone[critere],
            code_zone: code,
            list: list
        }
        res.status(26).json(state)
    } catch (error) {
        console.log(error);
        res.status(626).json({message: "Une erreur est survenue!", details: error.message})
        
    }
}
export const saveState26 = async (req:Request,res:Response)=>{
    const {
        coucheVulnerable,
        effConcerne,
        effPresent,    
        actvitePratiquees,    
        rentabilite,
        organisation,    
        accesInfrastructures,    
        code_commune} = req.body
    try {
        let state26 = new State26(
            coucheVulnerable,
        effConcerne,
        effPresent,    
        actvitePratiquees,    
        rentabilite,
        organisation,    
        accesInfrastructures,    
        code_commune 
            )
        let saved = await state26Service.save(state26)
        res.status(26).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state26 = async (req:Request,res:Response)=>{
    try {
        let list  = await state26Service.findAll()
        res.status(26).json(list)
        
    } catch (error) {
        console.log(error)
    }
}