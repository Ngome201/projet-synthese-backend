import { Request,Response } from "express"
import { State11Service } from "../services"
import { State11 } from "../entities"
import { MyZone, StateDTO11 } from "../types"
const state11Service = new State11Service()

export const getState11  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined
  
    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}
  
      try {
        let ressource: State11[] = await state11Service.findByZone(critere, code)
  
        let state11: StateDTO11 = {
          type_zone: MyZone[critere],
          code_zone: code,
          list: ressource,
        }
        
        res.status(201).json(state11)
  
      } catch (error) {
          res.status(400).json({message: "Une erreur est survenue!", details: error.message})
      }
     
  }

export const saveState11 = async (req:Request,res:Response)=>{
    const {year ,
        rubric ,
        functionIncome ,
        fiscIncome ,
        cac ,
        tcd ,
        tci ,
        rrce ,
        pf ,
        tr ,
        appd ,
        ra ,
        trf ,
        ri ,
        fd ,
        reserves ,   
        ser ,
        elmt ,
        adlmt ,
        rpaclmt ,
        aic ,
        pic ,
        code_commune,
      } = req.body
    try {
        let state11 = new State11(
            year ,
        rubric ,
        functionIncome ,
        fiscIncome ,
        cac ,
        tcd ,
        tci ,
        rrce ,
        pf ,
        tr ,
        appd ,
        ra ,
        trf ,
        ri ,
        fd ,
        reserves,  
        ser ,
        elmt ,
        adlmt ,
        rpaclmt ,
        aic ,
        pic ,
        code_commune,
        )
        let saved = await state11Service.save(state11)
        res.status(201).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}
export const state11 = async (req:Request,res:Response)=>{
    try {
        let list  = await state11Service.findAll()
        res.status(200).json(list)
        
    } catch (error) {
        console.log(error)
    }
}