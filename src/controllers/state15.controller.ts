import { Request,Response } from "express"
import { State15Service } from "../services"
import { State15 } from "../entities"
import { MyZone, StateDTO15 } from "../types"

const state15Service = new State15Service()
let list

export const getState15 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state15Service.findByZone(critere,code)
        let state :StateDTO15 = {
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
export const saveState15 = async (req:Request,res:Response)=>{
    const {
        aspectAnalyse,
        contraintes,
        axeRenforcement,
        dateLimite,
        besoinAppui,
        code_commune } = req.body
    try {
        let state15 = new State15(
            aspectAnalyse,
            contraintes,
            axeRenforcement,
            dateLimite,
            besoinAppui,
            code_commune
            )
        let saved = await state15Service.save(state15)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state15 = async (req:Request,res:Response)=>{
    try {
        let list  = await state15Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}