import { Request,Response } from "express"
import { State8Service } from "../services"
import { State8 } from "../entities"
import { MyZone, StateDTO8 } from "../types"
const state8Service = new State8Service()

export const getState8  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined
  
    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}
  
      try {
        let ressource: State8[] = await state8Service.findByZone(critere, code)
  
        let state8: StateDTO8 = {
          type_zone: MyZone[critere],
          code_zone: code,
          list: ressource,
        }
        
        res.status(201).json(state8)
  
      } catch (error) {
          res.status(400).json({message: "Une erreur est survenue!", details: error.message})
      }
     
  }

export const saveState8 = async (req:Request,res:Response)=>{
    const {start,end,name,occupation,council,department,region} = req.body
    try {
        // let mayor = new State8(name,start,end,occupation,council,department,region)
        // let saved = await state8Service.save(mayor)
        // res.status(200).json(saved)
        return
    } catch (error) {
        console.log(error);
        
    }
}