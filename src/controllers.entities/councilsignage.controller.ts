import { Request,Response } from "express"
import { CouncilSignageService } from "../services/CouncilSignage.service"
import { toNombre, estNullUndefinedOuVide } from "../functions"
import { CouncilSignage } from "../entities/CouncilSignage"
import { MyZone } from "../types"

const SignageService = new CouncilSignageService()

export const insertCouncilSignage  = async (req: Request, res : Response) => {

    let {code_commune, createDate, surface, population, ethnic, regroupements,
        nbr_villages, degree,economic_activity, social_infrasture, nbr_femmes_council, nbr_hommes_council, nbr_deces_coucil, nbr_contractuels,
        nbr_decisionnaires , nbr_temporaires, nbr_fonctionnaires, municipal_heritage, 
        relationship_network, main_strengths, main_weaknesses, opportunities, obstacles} = req.body

    let erreurs = [];

    if(!toNombre(code_commune)) {erreurs.push("Bien vouloir renseigner l'attribut `code_commune`. C'est un nombre.")}
    if(!toNombre(population)) {erreurs.push("Bien vouloir renseigner l'attribut `population`. C'est un nombre.")}
    if(!toNombre(surface)) {erreurs.push("Bien vouloir renseigner l'attribut `surface`. C'est un nombre.")}
    if(estNullUndefinedOuVide(municipal_heritage)) {erreurs.push("Bien vouloir renseigner l'attribut \"municipal_heritage\"")}
    if(estNullUndefinedOuVide(ethnic)) {erreurs.push("Bien vouloir renseigner l'attribut \"ethnic\"")}

    if(erreurs.length != 0){
        res.status(400).json({message: "Une erreur est survenue!", details: erreurs.join("\n")})
        return
    }

    try {
        let Signage_: CouncilSignage = new CouncilSignage(code_commune, createDate, surface, population, ethnic, regroupements,
            nbr_villages, degree,economic_activity, social_infrasture, nbr_femmes_council, nbr_hommes_council, nbr_deces_coucil, nbr_contractuels,
            nbr_decisionnaires , nbr_temporaires, nbr_fonctionnaires, municipal_heritage, 
            relationship_network, main_strengths, main_weaknesses, opportunities, obstacles)
        
        Signage_  = await SignageService.save(Signage_)
        res.status(201).json(Signage_)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getCouncilSignage  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
      let Signage : CouncilSignage[] = await SignageService.findByZone(critere, code)
      res.status(201).json(Signage)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const deleteCouncilSignage  = async (req: Request, res : Response) => {
    const id = req.params.id

    if(!id) {res.status(400).json({message: "Bien vouloir renseigner l'id de l'entité!"})
            return
        }

    try {
      await SignageService.delete(id)
      res.status(200).json({message: "presenetation commune supprimée avec succès."})

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}



