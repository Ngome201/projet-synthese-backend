import { Request,Response } from "express"
import { CouncilPresentationService } from "../services/CouncilPresentation.service"
import { toNombre, estNullUndefinedOuVide } from "../functions"
import { CouncilPresentation } from "../entities/CouncilPresentation"
import { MyZone } from "../types"

const presentationService = new CouncilPresentationService()

export const insertCouncilPresentation  = async (req: Request, res : Response) => {

    let {code_commune, name, location, limits, createDate, commissioningDate, adress, 
        population, density, surface, ethnic_group, Number_of_villages} = req.body

    let erreurs = [];

    if(!toNombre(code_commune)) {erreurs.push("Bien vouloir renseigner l'attribut `code_commune`. C'est un nombre.")}
    if(!toNombre(population)) {erreurs.push("Bien vouloir renseigner l'attribut `population`. C'est un nombre.")}
    if(!toNombre(density)) {erreurs.push("Bien vouloir renseigner l'attribut `density`. C'est un nombre.")}
    if(!toNombre(surface)) {erreurs.push("Bien vouloir renseigner l'attribut `surface`. C'est un nombre.")}
    if(estNullUndefinedOuVide(name)) {erreurs.push("Bien vouloir renseigner l'attribut \"name\"")}
    if(estNullUndefinedOuVide(location)) {erreurs.push("Bien vouloir renseigner l'attribut \"location\"")}
    if(estNullUndefinedOuVide(limits)) {erreurs.push("Bien vouloir renseigner l'attribut \"limits\"")}
    if(estNullUndefinedOuVide(location)) {erreurs.push("Bien vouloir renseigner l'attribut \"location\"")}
    if(estNullUndefinedOuVide(limits)) {erreurs.push("Bien vouloir renseigner l'attribut \"limits\"")}

    if(erreurs.length != 0){
        res.status(400).json({message: "Une erreur est survenue!", details: erreurs.join("\n")})
        return
    }

    try {
        let presentation_: CouncilPresentation = new CouncilPresentation(code_commune, name, location, limits, createDate, commissioningDate, adress, 
            population, density, surface, ethnic_group, Number_of_villages)
        
        presentation_  = await presentationService.save(presentation_)
        res.status(201).json(presentation_)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getCouncilPresentation  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
      let presentation : CouncilPresentation[] = await presentationService.findByZone(critere, code)
      res.status(201).json(presentation)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const deleteCouncilPresentation  = async (req: Request, res : Response) => {
    const id = req.params.id

    if(!id) {res.status(400).json({message: "Bien vouloir renseigner l'id de l'entité!"})
            return
        }

    try {
      await presentationService.delete(id)
      res.status(200).json({message: "presenetation commune supprimée avec succès."})

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}



