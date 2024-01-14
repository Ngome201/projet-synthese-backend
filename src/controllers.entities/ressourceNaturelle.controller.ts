import { Request,Response } from "express"
import { RessourceNaturelleService } from "../services/RessourceNaturelle.service"
import { RessourceNaturelle } from "../entities/RessourceNaturelle"
import { toNombre, estNullUndefinedOuVide } from "../functions"
import { MyZone } from "../types"

const ressourceService = new RessourceNaturelleService()

export const insertRessourceNaturelle  = async (req: Request, res : Response) => {

    let {code_commune, nom, statut, coordX, coordY, coordZ, localisationDescriptive,
    potentiel, controle_acces, mode_gestion, tendance, probleme_contrainte, action_a_mener} = req.body

    let erreurs = [];

    if(!toNombre(code_commune)) {
        erreurs.push("Bien vouloir renseigner l'attribut 'code_commune'. C'est un nombre.")
    }
    if(estNullUndefinedOuVide(nom)) {erreurs.push("Bien vouloir renseigner l'attribut 'nom'")}
    if(estNullUndefinedOuVide(statut)) {erreurs.push("Bien vouloir renseigner l'attribut 'statut'")}
    if(!toNombre(coordX)) {erreurs.push("Bien vouloir renseigner l'attribut 'coordX'. C'est un nombre.")}
    if(!toNombre(coordY)) {erreurs.push("Bien vouloir renseigner l'attribut 'coordY'. C'est un nombre.")}
    if(!toNombre(coordZ)) {erreurs.push("Bien vouloir renseigner l'attribut 'coordZ'. C'est un nombre.")}

    if(estNullUndefinedOuVide(localisationDescriptive)) {localisationDescriptive = ""}    
    if(estNullUndefinedOuVide(potentiel)) {erreurs.push("Bien vouloir renseigner l'attribut 'potentiel'")}
    if(estNullUndefinedOuVide(controle_acces)) {erreurs.push("Bien vouloir renseigner l'attribut 'controle_acces'")}
    if(estNullUndefinedOuVide(mode_gestion)) {erreurs.push("Bien vouloir renseigner l'attribut 'mode_gestion'")}
    if(estNullUndefinedOuVide(tendance)) {tendance = ""}
    if(estNullUndefinedOuVide(probleme_contrainte)) {probleme_contrainte = ""}
    if(estNullUndefinedOuVide(action_a_mener)) {action_a_mener = ""}

    if(erreurs.length != 0){
        res.status(400).json({message: "Une erreur est survenue!", details: erreurs})
        return
    }

    try {
        let ressourceNaturelle: RessourceNaturelle = new RessourceNaturelle(code_commune, nom, statut, coordX, coordY, coordZ,
             localisationDescriptive, potentiel, controle_acces, mode_gestion, tendance, probleme_contrainte, action_a_mener)
        
        ressourceNaturelle  = await ressourceService.save(ressourceNaturelle)
        res.status(201).json(ressourceNaturelle)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getRessourceNaturelle  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
      let ressources: RessourceNaturelle[] = await ressourceService.findByZone(critere, code)
      res.status(201).json(ressources)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const deleteRessourceNaturelle  = async (req: Request, res : Response) => {
    const id = req.params.id

    if(!id) {res.status(400).json({message: "Bien vouloir renseigner l'id de l'entité!"})
            return
        }

    try {
      await ressourceService.delete(id)
      res.status(200).json({message: "RessourceNaturelle supprimée avec succès."})

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}
