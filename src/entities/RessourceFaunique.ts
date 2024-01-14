import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class RessourceFaunique extends Sharedprops{
    constructor(id_type_ressource: number, code_commune: number,
        nom_local: string, nom_usuel: string, nom_scientifique: string){
        super()
        this.id_type_ressource = id_type_ressource
        this.code_commune = code_commune
        this.nom_local = nom_local
        this.nom_usuel = nom_usuel
        this.nom_scientifique = nom_scientifique
    }


    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column({default: 0})
    id_type_ressource : number
    @Column({default: 0})
    code_commune : number
    @Column()
    nom_local : string
    @Column()
    nom_usuel : string
    @Column()
    nom_scientifique : string

}

