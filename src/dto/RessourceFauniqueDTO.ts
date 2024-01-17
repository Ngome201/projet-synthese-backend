import { RessourceFaunique } from "../entities/RessourceFaunique"

export class RessourceFauniqueDTO {
    constructor(res: RessourceFaunique){
        this.code_commune = res.code_commune
        this.nom_local = res.nom_local
        this.nom_usuel = res.nom_usuel
        this.nom_scientifique = res.nom_scientifique
    }

    code_commune : number
    nom_local : string
    nom_usuel : string
    nom_scientifique : string

}

