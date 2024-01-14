import { Request,Response } from "express"
import { State3Service } from "../services/state3.service"
import { State3 } from "../entities/State3"
import { estNullUndefinedOuVide } from "../functions"
import { MyZone, StateDTO3 } from "../types"

const state3Service = new State3Service()
let list 

export const getState3 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state3Service.findByZone(critere,code)
        let state3 :StateDTO3 = {
            type_zone: MyZone[critere],
            code_zone: code,
            list: list
        }
        res.status(200).json(state3)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur est survenue!", details: error.message})
        
    }
}
export const getAllState3= async (req:Request,res:Response)=>{
    list  = await state3Service.findAll();
    try {
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur est survenue!", details: error.message})
        
    }
}
export const saveState3 = async (req:Request,res:Response)=>{
    const {start,end,name,occupation,code_commune} = req.body
    if (estNullUndefinedOuVide(start)||
        estNullUndefinedOuVide(end)||
        estNullUndefinedOuVide(name)||
        estNullUndefinedOuVide(occupation)||
        estNullUndefinedOuVide(code_commune)

    ) {
        res.status(401).json("Veuillez remplir tous les champs")
        return
    }
    try {
        let mayor = new State3(name,start,end,occupation,code_commune)
        let saved = await state3Service.save(mayor)
        res.status(200).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
