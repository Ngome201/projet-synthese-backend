import { Request,Response } from "express"
import { State20Service } from "../services"
import { State20 } from "../entities"
import { MyZone, StateDTO20 } from "../types"

const state20Service = new State20Service()
let list

export const getState20 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state20Service.findByZone(critere,code)
        let state :StateDTO20 = {
            type_zone: MyZone[critere],
            code_zone: code,
            list: list
        }
        res.status(200).json(state)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur est survenue!", details: error.message})
        
    }
}
export const saveState20 = async (req:Request,res:Response)=>{
    const {
        especesElevees ,
        effectifEleveurs ,
        modeElevage,    
        effectif ,    
        bassinProduction ,    
        code_commune} = req.body
    try {
        let state20 = new State20(
            especesElevees ,
            effectifEleveurs ,
            modeElevage,    
            effectif ,    
            bassinProduction ,    
            code_commune
            )
        let saved = await state20Service.save(state20)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state20 = async (req:Request,res:Response)=>{
    try {
        let list  = await state20Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}