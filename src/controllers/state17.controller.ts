import { Request,Response } from "express"
import { State17Service } from "../services"
import { State17 } from "../entities"
import { MyZone, StateDTO17 } from "../types"

const state17Service = new State17Service()
let list

export const getState17 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state17Service.findByZone(critere,code)
        let state :StateDTO17 = {
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
export const saveState17 = async (req:Request,res:Response)=>{
    const {
        aspectAnalyse,
        contraintes,
        opportunites,
        faiblesses,
        forces,
        solutions,
        code_commune } = req.body
    try {
        let state17 = new State17(
            aspectAnalyse,
            contraintes,
            opportunites,
            faiblesses,
            forces,
            solutions,
            code_commune
            )
        let saved = await state17Service.save(state17)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state17 = async (req:Request,res:Response)=>{
    try {
        let list  = await state17Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}