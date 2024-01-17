import { Request,Response } from "express"
import { toNombre, estNullUndefinedOuVide } from "../functions"
import { MyZone } from "../types"
import { RessourceFauniqueService } from "../services/RessourceFaunique.service"
import { RessourceFaunique } from "../entities/RessourceFaunique"

const ressourceService = new RessourceFauniqueService()

export const insertRessourceFaunique  = async (req: Request, res : Response) => {

    let {code_commune, id_type_ressource, nom_local, nom_usuel, nom_scientifique} = req.body

    let erreurs = [];

    if(!toNombre(code_commune)) {erreurs.push("Bien vouloir renseigner l'attribut `code_commune`. C'est un nombre.")}
    if(!toNombre(id_type_ressource)) {erreurs.push("Bien vouloir renseigner l'attribut `id_type_ressource`. C'est un nombre.")}
    if(estNullUndefinedOuVide(nom_local)) {erreurs.push("Bien vouloir renseigner l'attribut `nom_local`")}
    if(estNullUndefinedOuVide(nom_usuel)) {erreurs.push("Bien vouloir renseigner l'attribut `nom_usuel`")}
    if(estNullUndefinedOuVide(nom_scientifique)) {nom_scientifique = ""}

    if(erreurs.length != 0){
        res.status(400).json({message: "Une erreur est survenue!", details: erreurs})
        return
    }

    try {
        let ressourceFaunique: RessourceFaunique = new RessourceFaunique(id_type_ressource, code_commune,
            nom_local, nom_usuel, nom_scientifique)
        
        ressourceFaunique  = await ressourceService.save(ressourceFaunique)
        res.status(201).json(ressourceFaunique)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getRessourceFaunique  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_commune) {code = parseInt(req.query.code_commune.toString()); critere = MyZone.Commune}
    else if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
      let ressources: RessourceFaunique[] = await ressourceService.findByZone(critere, code)
      res.status(201).json(ressources)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const deleteRessourceFaunique  = async (req: Request, res : Response) => {
    const id = req.params.id

    if(!id) {res.status(400).json({message: "Bien vouloir renseigner l'id de l'entité!"})
            return
        }

    try {
      await ressourceService.delete(id)
      res.status(200).json({message: "RessourceFaunique supprimée avec succès."})

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}
