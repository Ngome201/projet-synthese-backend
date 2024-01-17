import { Request,Response } from "express"
import { State6, MyZone } from "../types"
import { RessourceFauniqueService } from "../services/RessourceFaunique.service"
import { RessourceFaunique } from "../entities/RessourceFaunique"
import { RessourceFauniqueDTO } from "../dto/RessourceFauniqueDTO"

const ressourceService = new RessourceFauniqueService()

export const getState6  = async (req: Request, res : Response) => {
  let code: number = -1, critere: MyZone = undefined

  if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
  else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
  else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
  else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
      let ressource: RessourceFaunique[] = await ressourceService.findByZone(critere, code)

      let state6: State6 = {
        type_zone: MyZone[critere],
        code_zone: code,
        listeRessources: ressource.map((value) =>{let res = new RessourceFauniqueDTO(value); return res;}),
      }
      
      res.status(201).json(state6)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}
