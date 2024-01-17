import { Request,Response } from "express"
import { State16Service } from "../services"
import { State16 } from "../entities"
import { MyZone, StateDTO16 } from "../types"

const state16Service = new State16Service()
let list

export const getState16 = async (req:Request,res:Response)=>{
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        list = await state16Service.findByZone(critere,code)
        let state :StateDTO16 = {
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
export const saveState16 = async (req:Request,res:Response)=>{
    const {
        besoin,
        populationTotale,
        populationCouverte,
        ecarts,
        justificationEcart,
        objectifGeneraux,
        principalesActivites,
        responsablePartenaire,
        code_commune } = req.body
    try {
        let state16 = new State16(
            besoin,
            populationTotale,
            populationCouverte,
            ecarts,
            justificationEcart,
            objectifGeneraux,
            principalesActivites,
            responsablePartenaire,
            code_commune
            )
        let saved = await state16Service.save(state16)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state16 = async (req:Request,res:Response)=>{
    try {
        let list  = await state16Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}