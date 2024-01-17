import { Request,Response } from "express"
import { toNombre, estNullUndefinedOuVide } from "../functions"
import { TypeEtatService } from "../services/TypeEtat.service"
import { TypeEtat } from "../entities/TypeEtat"

const typeEtatService = new TypeEtatService()

export const insertTypeEtat  = async (req: Request, res : Response) => {

    let {numero, titre, description} = req.body

    let erreurs = [];

    if(!toNombre(numero)) {erreurs.push("Bien vouloir renseigner l'attribut `numero`. C'est un nombre.")}
    if(estNullUndefinedOuVide(titre)) {erreurs.push("Bien vouloir renseigner l'attribut `titre`")}
    if(estNullUndefinedOuVide(description)) {description = ""}

    if(erreurs.length != 0){
        res.status(400).json({message: "Une erreur est survenue!", details: erreurs})
        return
    }

    try {
        let typeEtat: TypeEtat = new TypeEtat(numero, titre, description)
        
        typeEtat  = await typeEtatService.save(typeEtat)
        res.status(201).json(typeEtat)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getTypeEtat  = async (req: Request, res : Response) => {

    try {
      let types: TypeEtat[] = await typeEtatService.findAll()
      res.status(201).json(types)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const deleteTypeEtat  = async (req: Request, res : Response) => {
    const id = req.params.id

    if(!id) {res.status(400).json({message: "Bien vouloir renseigner l'id de l'entité!"})
            return
        }

    try {
      await typeEtatService.delete(id)
      res.status(200).json({message: "TypeEtat supprimée avec succès."})

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}
