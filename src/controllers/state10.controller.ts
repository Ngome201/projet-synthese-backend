import { Request,Response } from "express"
import { State10Service } from "../services"
import { State10 } from "../entities"
import { MyZone, StateDTO10 } from "../types"
const state10Service = new State10Service()
let list
export const getState10 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state10Service.findByZone(critere,code)
        let state :StateDTO10 = {
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
export const saveState10 = async (req:Request,res:Response)=>{
    const {year ,
        totalIncome ,
        populationSize ,
        incomePerHab ,    
        code_commune } = req.body
    try {
        let state10 = new State10(
            year ,
            totalIncome ,
            populationSize ,
            incomePerHab ,    
            code_commune
            )
        let saved = await state10Service.save(state10)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state10 = async (req:Request,res:Response)=>{
    try {
        let list  = await state10Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}