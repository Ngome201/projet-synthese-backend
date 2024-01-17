import { Request,Response } from "express"
import { State4Service } from "../services/state4.service"
import { State4 } from "../entities/State4"
import { MyZone, StateDTO4 } from "../types"

const state4Service = new State4Service()
let list 
export const getState4 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state4Service.findByZone(critere,code)
        let state :StateDTO4 = {
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
export const state4 = async (req:Request,res:Response)=>{
    try {
        list = await state4Service.findAll()
        res.status(200).json(list)
    } catch (error) {
        console.log(error);
        
    }
}
export const saveState4 = async (req:Request,res:Response)=>{
    console.log("enter")
    const {code_commune,sector,activities,problems,potentialities,resources} = req.body
    try {
        let councilResource = new State4(code_commune,activities,problems,potentialities,resources, sector)
        let saved = await state4Service.save(councilResource)
        res.status(200).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}