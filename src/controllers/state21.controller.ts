import { Request,Response } from "express"
import { State21Service } from "../services"
import { State21 } from "../entities"
import { MyZone, StateDTO21 } from "../types"

const state21Service = new State21Service()
let list

export const getState21 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state21Service.findByZone(critere,code)
        let state :StateDTO21 = {
            type_zone: MyZone[critere],
            code_zone: code,
            list: list
        }
        res.status(211).json(state)
    } catch (error) {
        console.log(error);
        res.status(511).json({message: "Une erreur est survenue!", details: error.message})
        
    }
}
export const saveState21 = async (req:Request,res:Response)=>{
    const {
        culture,
        bassinProduction, 
        superficieCultivees,
        productionEstimees,                   
        code_commune} = req.body
    try {
        let state21 = new State21(
            culture,
        bassinProduction, 
        superficieCultivees,
        productionEstimees,                   
        code_commune    
            )
        let saved = await state21Service.save(state21)
        res.status(211).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state21 = async (req:Request,res:Response)=>{
    try {
        let list  = await state21Service.findAll()
        res.status(211).json(list)
        
    } catch (error) {
        console.log(error)
    }
}