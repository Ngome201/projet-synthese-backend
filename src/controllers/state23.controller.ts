import { Request,Response } from "express"
import { State23Service } from "../services"
import { State23 } from "../entities"
import { MyZone, StateDTO23 } from "../types"

const state23Service = new State23Service()
let list

export const getState23 = async (req:Request,res:Response)=>{
    let code: number = -23, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state23Service.findByZone(critere,code)
        let state :StateDTO23 = {
            type_zone: MyZone[critere],
            code_zone: code,
            list: list
        }
        res.status(23).json(state)
    } catch (error) {
        console.log(error);
        res.status(523).json({message: "Une erreur est survenue!", details: error.message})
        
    }
}
export const saveState23 = async (req:Request,res:Response)=>{
    const {
        unitePaysage ,
        caracteristiques,
        utilisationActuelle,    
        potentialites ,    
        solEndogenes ,
        solEnvisagees ,    
        code_commune} = req.body
    try {
        let state23 = new State23(
            unitePaysage ,
        caracteristiques,
        utilisationActuelle,    
        potentialites ,    
        solEndogenes ,
        solEnvisagees ,    
        code_commune   
            )
        let saved = await state23Service.save(state23)
        res.status(23).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state23 = async (req:Request,res:Response)=>{
    try {
        let list  = await state23Service.findAll()
        res.status(23).json(list)
        
    } catch (error) {
        console.log(error)
    }
}