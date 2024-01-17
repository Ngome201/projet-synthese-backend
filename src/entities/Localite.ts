import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class Localite extends Sharedprops{
    constructor(nom: string, code_localite: number){
        super()
        this.nom = nom
        this.code_localite = code_localite
    }

    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column()
    code_localite : number
    @Column()
    code_commune : number
    @Column()
    nom : string
    @Column()
    population_masculin : number
    @Column()
    population_feminin : number
    @Column()
    population_totale : number
    @Column({nullable: true})
    chefferie: string
    @Column()
    accessible : boolean
    @Column()
    nb_menage : number

}

