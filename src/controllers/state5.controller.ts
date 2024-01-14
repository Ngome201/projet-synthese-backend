import { Request,Response } from "express"
import { State5, MyZone } from "../types"
import { RessourceNaturelleService } from "../services/RessourceNaturelle.service"
import { RessourceNaturelle } from "../entities/RessourceNaturelle"
import { RessourceNaturelleDTO } from "../dto/RessourceNaturelleDTO"

const ressourceService = new RessourceNaturelleService()

export const getState5  = async (req: Request, res : Response) => {
  let code: number = -1, critere: MyZone = undefined

  if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
  else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
  else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
  else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
      let ressource: RessourceNaturelle[] = await ressourceService.findByZone(critere, code)

      let state5: State5 = {
        type_zone: MyZone[critere],
        code_zone: code,
        listeRessources: ressource.map((value) =>{let res = new RessourceNaturelleDTO(value); return res;}),
      }
      
      res.status(201).json(state5)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}