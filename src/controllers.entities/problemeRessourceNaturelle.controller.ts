import { Request,Response } from "express"
import { ProblemeRessourceNaturelleService } from "../services/ProblemeRessourceNaturelle.service"
import { estNullUndefinedOuVide } from "../functions"
import { ProblemeRessourceNaturelle } from "../entities/ProblemeRessourceNaturelle"
import { MyZone } from "../types"

const problemeService = new ProblemeRessourceNaturelleService()

export const insertProbleme  = async (req: Request, res : Response) => {

    let {commune, departement, region, probleme} = req.body

    let erreurs = [];

    if(estNullUndefinedOuVide(commune)) {erreurs.push("Bien vouloir renseigner l'attribut \"commune\"")}
    if(estNullUndefinedOuVide(departement)) {erreurs.push("Bien vouloir renseigner l'attribut \"departement\"")}
    if(estNullUndefinedOuVide(region)) {erreurs.push("Bien vouloir renseigner l'attribut \"region\"")}
    if(estNullUndefinedOuVide(probleme)) {erreurs.push("Bien vouloir renseigner l'attribut \"probleme\"")}

    if(erreurs.length != 0){
        res.status(400).json({message: "Une erreur est survenue!", details: erreurs.join("\n")})
        return
    }

    try {
        let probleme_: ProblemeRessourceNaturelle = new ProblemeRessourceNaturelle(commune, departement, region, probleme)
        
        probleme_  = await problemeService.save(probleme_)
        res.status(201).json(probleme_)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getProbleme  = async (req: Request, res : Response) => {
    let critere: MyZone = MyZone.Pays, nom_zone: string = ""

    if(req.query.commune) {critere = MyZone.Commune; nom_zone = req.query.commune.toString()}
    else if(req.query.departement) {critere = MyZone.Departement; nom_zone = req.query.departement.toString()}
    else if(req.query.region) {critere = MyZone.Region; nom_zone = req.query.region.toString()}

    try {
      let probleme = await problemeService.findByZone(critere, nom_zone)
      res.status(201).json(probleme)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const deleteProbleme  = async (req: Request, res : Response) => {
    const id = req.params.id

    if(!id) {res.status(400).json({message: "Bien vouloir renseigner l'id de l'entité!"})
            return
        }

    try {
      await problemeService.delete(id)
      res.status(200).json({message: "ProblemeRessourceNaturelle supprimé avec succès."})

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}
