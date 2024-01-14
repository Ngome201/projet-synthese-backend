import { Request, Response } from "express"
import { MyZone } from "../types"
import { CommuneCodeService } from "../services/CommuneCode.service"

const ccService = new CommuneCodeService()

export const getCommuneCode  = async (req: Request, res : Response) => {
    let code: number = -1, critere: MyZone = undefined

    if(req.query.code_departement) {code = parseInt(req.query.code_departement.toString()); critere = MyZone.Departement}
    else if(req.query.code_region) {code = parseInt(req.query.code_region.toString()); critere = MyZone.Region}
    else if(req.query.code_pays) {code = parseInt(req.query.code_pays.toString()); critere = MyZone.Pays}

    try {
        let commune_codes: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)
        res.status(201).json(commune_codes)
    } catch (error) {
        res.status(400).json({message: "Une erreur est survenue!", details: error.message})
    }
   
}
