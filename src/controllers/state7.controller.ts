import { Request,Response } from "express"
import { State7Service } from "../services/state7.service"
import { State7 } from "../entities"
import { MyZone, StateDTO7 } from "../types"
let list
const state7Service = new State7Service()
export const getState7 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state7Service.findByZone(critere,code)
        let state :StateDTO7 = {
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

export const saveState7 = async (req:Request,res:Response)=>{
    const {code_commune,localName,commerceName,scientistName,usage} = req.body
    try {
        let state7 = new State7(localName,commerceName,scientistName,usage,code_commune)
        let saved = await state7Service.save(state7)
        res.status(200).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state7 = async (req:Request,res:Response)=>{
    try {
        list = await state7Service.findAll()
        res.status(200).json(list)
    } catch (error) {
        console.log(error);
        
    }
}