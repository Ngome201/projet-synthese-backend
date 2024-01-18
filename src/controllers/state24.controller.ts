import { Request,Response } from "express"
import { State24Service } from "../services"
import { State24 } from "../entities"
import { MyZone, StateDTO24 } from "../types"

const state24Service = new State24Service()
let list

export const getState24 = async (req:Request,res:Response)=>{
    let code: number = -24, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state24Service.findByZone(critere,code)
        let state :StateDTO24 = {
            type_zone: MyZone[critere],
            code_zone: code,
            list: list
        }
        res.status(24).json(state)
    } catch (error) {
        console.log(error);
        res.status(524).json({message: "Une erreur est survenue!", details: error.message})
        
    }
}
export const saveState24 = async (req:Request,res:Response)=>{
    const {
        secteur ,
        tendances,
        problemes,    
        causes,    
        effets,
        potentielLocal,    
        solutions,    
        code_commune} = req.body
    try {
        let state24 = new State24(
            secteur ,
        tendances,
        problemes,    
        causes,    
        effets,
        potentielLocal,    
        solutions,    
        code_commune 
            )
        let saved = await state24Service.save(state24)
        res.status(24).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state24 = async (req:Request,res:Response)=>{
    try {
        let list  = await state24Service.findAll()
        res.status(24).json(list)
        
    } catch (error) {
        console.log(error)
    }
}