import { Request,Response } from "express"
import { State14Service } from "../services"
import { State14 } from "../entities"
import { MyZone, StateDTO14 } from "../types"

const state14Service = new State14Service()
let list

export const getState14 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state14Service.findByZone(critere,code)
        let state :StateDTO14 = {
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
export const saveState14 = async (req:Request,res:Response)=>{
    const {
        aspectAnalyse,
        contraintes,
        opportunites,
        faiblesses,
        forces,
        solutions,
        code_commune } = req.body
    try {
        let state14 = new State14(
            aspectAnalyse,
            contraintes,
            opportunites,
            faiblesses,
            forces,
            solutions,
            code_commune
            )
        let saved = await state14Service.save(state14)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state14 = async (req:Request,res:Response)=>{
    try {
        let list  = await state14Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}