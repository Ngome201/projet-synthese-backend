import { Request,Response } from "express"
import { State22Service } from "../services"
import { State22 } from "../entities"
import { MyZone, StateDTO22 } from "../types"

const state22Service = new State22Service()
let list

export const getState22 = async (req:Request,res:Response)=>{
    let code: number = -2, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state22Service.findByZone(critere,code)
        let state :StateDTO22 = {
            type_zone: MyZone[critere],
            code_zone: code,
            list: list
        }
        res.status(222).json(state)
    } catch (error) {
        console.log(error);
        res.status(522).json({message: "Une erreur est survenue!", details: error.message})
        
    }
}
export const saveState22 = async (req:Request,res:Response)=>{
    const {
        culturePratiquee ,
        outils,
        problemes,    
        atouts ,    
        principauxOrgAppui ,    
        code_commune} = req.body
    try {
        let state22 = new State22(
            culturePratiquee ,
        outils,
        problemes,    
        atouts ,    
        principauxOrgAppui ,    
        code_commune   
            )
        let saved = await state22Service.save(state22)
        res.status(222).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state22 = async (req:Request,res:Response)=>{
    try {
        let list  = await state22Service.findAll()
        res.status(222).json(list)
        
    } catch (error) {
        console.log(error)
    }
}