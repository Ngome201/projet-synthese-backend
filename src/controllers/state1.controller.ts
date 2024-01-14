import { Request,Response } from "express"
import { State1, MyZone } from "../types"
import { CouncilPresentationService } from "../services/CouncilPresentation.service"
import { CouncilPresentation } from "../entities/CouncilPresentation"
import { CouncilPresentationDTO } from "../dto/CouncilPresentationDTO"

const presentationService = new CouncilPresentationService()

export const getState1  = async (req: Request, res : Response) => {
  let code: number = -1, critere: MyZone = undefined

  if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
  else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
  else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
  else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
      let presentation: CouncilPresentation[] = await presentationService.findByZone(critere, code)

      let state1: State1 = {
        type_zone: MyZone[critere],
        code_zone: code,
        listeRessources: presentation.map((value) =>{let res = new CouncilPresentationDTO(value); return res;}),
      }
      
      res.status(201).json(state1)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}
