import { RessourceNaturelle } from "../entities/RessourceNaturelle";

export class RessourceNaturelleDTO {
    
    constructor(res: RessourceNaturelle){
        this.code_commune = res.code_commune
        this.nom = res.nom
        this.statut = res.statut
        this.coordX = res.coordX
        this.coordY = res.coordY
        this.coordZ = res.coordZ
        this.localisationDescriptive = res.localisationDescriptive
        this.potentiel = res.potentiel
        this.controle_acces = res.controle_acces
        this.mode_gestion = res.mode_gestion
        this.tendance = res.tendance
        this.probleme_contrainte = res.probleme_contrainte
        this.action_a_mener = res.action_a_mener
    }

    
    code_commune : number    
    nom : string    
    statut : string    
    potentiel : string    
    probleme_contrainte : string    
    action_a_mener : string    
    controle_acces : string    
    coordX: number
    coordY: number
    coordZ: number
    localisationDescriptive : string    
    mode_gestion : string    
    tendance : string
}

