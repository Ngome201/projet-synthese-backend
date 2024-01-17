import { Request,Response } from "express"
import { toNombre, estNullUndefinedOuVide } from "../functions"
import { Historique } from "../entities/Historique"
import { HistoriqueService } from "../services/HistoriqueService"
import moment from "moment"

const histService = new HistoriqueService()

export const insertHistorique  = async (req: Request, res : Response) => {

    let {numero_etat, type_zone, code_zone, utilisateur, date} = req.body

    let erreurs = [];

    if(!toNombre(numero_etat)) {erreurs.push("Bien vouloir renseigner l'attribut `numero_etat`. C'est un nombre.")}
    if(!toNombre(type_zone)) {erreurs.push("Bien vouloir renseigner l'attribut `type_zone`. C'est un nombre.")}
    if(!toNombre(code_zone)) {erreurs.push("Bien vouloir renseigner l'attribut `code_zone`. C'est un nombre.")}
    if(estNullUndefinedOuVide(utilisateur)) {erreurs.push("Bien vouloir renseigner l'attribut `utilisateur`")}
    if(estNullUndefinedOuVide(date)) {date = moment().toDate()} else date = moment(date).toDate()

    if(erreurs.length != 0){
        res.status(400).json({message: "Une erreur est survenue!", details: erreurs})
        return
    }

    try {
        let hist: Historique = new Historique(date, utilisateur,
            numero_etat, type_zone, code_zone)
        
        hist  = await histService.save(hist)
        res.status(201).json(hist)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}

export const getHistorique  = async (req: Request, res : Response) => {
    let valeur: number | string = -1, critere: string = undefined

    if(req.query.code_zone) {valeur = parseInt(req.query.code_zone.toString()); critere = 'code_zone'}
    else if(req.query.type_zone) {valeur = parseInt(req.query.type_zone.toString()); critere = 'type_zone'}
    else if(req.query.numero_etat) {valeur = parseInt(req.query.numero_etat.toString()); critere = 'numero_etat'}
    else if(req.query.utilisateur) {valeur = req.query.utilisateur.toString(); critere = 'utilisateur'}

    try {
      let hist: Historique[] = []

      if(critere == 'code_zone'){
        hist = await histService.findByCodeZone(Number(valeur))
      }
      else if(critere == 'type_zone'){
        hist = await histService.findByTypeZone(Number(valeur))
      }
      else if(critere == 'numero_etat'){
        hist = await histService.findByNumeroEtat(Number(valeur))
      }
      else if(critere == 'utilisateur'){
        hist = await histService.findByUtilisateur(String(valeur))
      }
      else{
        hist = await histService.findAll()
      }

      res.status(201).json(hist)

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}


export const deleteHistorique  = async (req: Request, res : Response) => {
    const id = req.params.id

    if(!id) {res.status(400).json({message: "Bien vouloir renseigner l'id de l'entité!"})
            return
        }

    try {
      await histService.delete(id)
      res.status(200).json({message: "Element d'historique supprimé avec succès."})

    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}
