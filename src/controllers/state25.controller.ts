import { Request,Response } from "express"
import { State25Service } from "../services"
import { State25 } from "../entities"
import { MyZone, StateDTO25 } from "../types"

const state25Service = new State25Service()
let list

export const getState25 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state25Service.findByZone(critere,code)
        let state :StateDTO25 = {
            type_zone: MyZone[critere],
            code_zone: code,
            list: list
        }
        res.status(25).json(state)
    } catch (error) {
        console.log(error);
        res.status(525).json({message: "Une erreur est survenue!", details: error.message})
        
    }
}
export const saveState25 = async (req:Request,res:Response)=>{
    const {
        problemes,    
        causes,    
        effets,    
        solutions, 
        cout,
        secteur,
        code_commune} = req.body
    try {
        let state25 = new State25(
            problemes,    
        causes,    
        effets,    
        solutions, 
        cout,
        secteur,
        code_commune 
            )
        let saved = await state25Service.save(state25)
        res.status(25).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state25 = async (req:Request,res:Response)=>{
    try {
        let list  = await state25Service.findAll()
        res.status(25).json(list)
        
    } catch (error) {
        console.log(error)
    }
}