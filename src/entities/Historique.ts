import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class Historique extends Sharedprops{
    constructor(date_creation: Date, utilisateur: string, numero_etat: number, type_zone: number, code_zone: number){
        super()
        this.date_creation = date_creation
        this.utilisateur = utilisateur
        this.numero_etat = numero_etat
        this.type_zone = type_zone
        this.code_zone = code_zone
    }
	
    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column({ type: 'timestamptz'})
    date_creation: Date
    @Column()
    utilisateur : string
    @Column()
    numero_etat : number
    @Column()
    type_zone : number
    @Column()
    code_zone : number
}

