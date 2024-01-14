import { Request,Response } from "express"
import { State13Service } from "../services"
import { State13 } from "../entities"
import { MyZone, StateDTO13 } from "../types"

const state13Service = new State13Service()
let list

export const getState13 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state13Service.findByZone(critere,code)
        let state :StateDTO13 = {
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
export const saveState13 = async (req:Request,res:Response)=>{
    const {year ,
        libelle ,
        percentage ,
        code_commune } = req.body
    try {
        let state13 = new State13(
            year ,
            libelle ,
            percentage ,
            code_commune
            )
        let saved = await state13Service.save(state13)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state13 = async (req:Request,res:Response)=>{
    try {
        let list  = await state13Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}