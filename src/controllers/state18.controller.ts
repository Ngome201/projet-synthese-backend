import { Request,Response } from "express"
import { State18Service } from "../services"
import { State18 } from "../entities"
import { MyZone, StateDTO18 } from "../types"

const state18Service = new State18Service()
let list

export const getState18 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state18Service.findByZone(critere,code)
        let state :StateDTO18 = {
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
export const saveState18 = async (req:Request,res:Response)=>{
    const {
        village, 
            femmes, 
            hommes, 
            total, 
            nourrissons, 
            popcible, 
            popageprescolaire,
            popagescolprimaire,
            ado,
            popjeunes, 
            code_commune } = req.body
    try {
        let state18 = new State18(
            village, 
            femmes, 
            hommes, 
            total, 
            nourrissons, 
            popcible, 
            popageprescolaire,
            popagescolprimaire,
            ado,
            popjeunes, 
            code_commune
            )
        let saved = await state18Service.save(state18)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state18 = async (req:Request,res:Response)=>{
    try {
        let list  = await state18Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}