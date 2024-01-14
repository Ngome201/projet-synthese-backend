import { Request,Response } from "express"
import { State9Service } from "../services"
import { State9 } from "../entities"
import { MyZone, StateDTO9 } from "../types"
const state9Service = new State9Service()
let list 

export const getState9 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state9Service.findByZone(critere,code)
        let state :StateDTO9 = {
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
export const saveState9 = async (req:Request,res:Response)=>{
    const {libelle, functionExpense, personExpense, investmentExpense,code_commune} = req.body
    try {
        let state9 = new State9(libelle, functionExpense, personExpense, investmentExpense,code_commune)
        let saved = await state9Service.save(state9)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state9 = async (req:Request,res:Response)=>{
    try {
        list  = await state9Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}