import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class RessourceNaturelle extends Sharedprops{
    constructor(code_commune: number,
        nom:string, statut:string, coordX: number, coordY: number, coordZ: number, localisationDescriptive:string,
        potentiel:string, controle_acces:string, mode_gestion:string, tendance:string,
        probleme_contrainte:string, action_a_mener:string){
        super()
        this.code_commune = code_commune
        this.nom = nom
        this.statut = statut
        this.coordX = coordX
        this.coordY = coordY
        this.coordZ = coordZ
        this.localisationDescriptive = localisationDescriptive
        this.potentiel = potentiel
        this.controle_acces = controle_acces
        this.mode_gestion = mode_gestion
        this.tendance = tendance
        this.probleme_contrainte = probleme_contrainte
        this.action_a_mener = action_a_mener
    }


    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column()
    code_commune : number
    @Column()
    nom : string

    @Column({nullable:true})
    statut : string
    @Column({nullable:true})
    caracteristique : string
    @Column({nullable:true})
    utilisation_actuelle : string
    @Column({nullable:true})
    potentiel : string
    @Column({nullable:true})
    probleme_contrainte : string
    @Column({nullable:true})
    action_a_mener : string
    @Column({nullable:true})
    controle_acces : string
    @Column({nullable:true})
    archive : string
    @Column({default: 0})
    id_source: number
    @Column({nullable:true})
    mise_a_jour : string

    @Column({nullable:true})
    localisationDescriptive : string
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    coordX: number
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    coordY: number
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    coordZ: number

    @Column({nullable:true})
    mode_gestion : string
    @Column({nullable:true})
    tendance : string
}

