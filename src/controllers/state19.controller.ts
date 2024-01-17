import { Request,Response } from "express"
import { State19Service } from "../services"
import { State19 } from "../entities"
import { MyZone, StateDTO19 } from "../types"

const state19Service = new State19Service()
let list

export const getState19 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state19Service.findByZone(critere,code)
        let state :StateDTO19 = {
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
export const saveState19 = async (req:Request,res:Response)=>{
    const {
        typespece,
        bovin,
        ovin,
        caprin,
        pigeon,
        poulet ,    
        pintades ,    
        canards ,    
        oies,
        dindons,
        lapin,
        code_commune } = req.body
    try {
        let state19 = new State19(
            typespece,
        bovin,
        ovin,
        caprin,
        pigeon,
        poulet ,    
        pintades ,    
        canards ,    
        oies,
        dindons,
        lapin,
        code_commune 
            )
        let saved = await state19Service.save(state19)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state19 = async (req:Request,res:Response)=>{
    try {
        let list  = await state19Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}