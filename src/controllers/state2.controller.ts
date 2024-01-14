import { Request,Response } from "express"
import { State2, MyZone } from "../types"
import { CouncilSignageService } from "../services/CouncilSignage.service"
import { CouncilSignage } from "../entities/CouncilSignage"
import { CouncilSignageDTO } from "../dto/CouncilSignageDTO"

const signageService = new CouncilSignageService()

export const getState2  = async (req: Request, res : Response) => {
  let code: number = -1, critere: MyZone = undefined

  if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
  else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
  else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
  else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
      let signage: CouncilSignage[] = await signageService.findByZone(critere, code)

      let state2: State2 = {
        type_zone: MyZone[critere],
        code_zone: code,
        listeRessources: signage.map((value) =>{let res = new CouncilSignageDTO(value); return res;}),
      }
      
      res.status(201).json(state2)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}
