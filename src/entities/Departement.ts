import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class Departement extends Sharedprops{
    constructor(nom: string, code_departement: number){
        super()
        this.nom = nom
        this.code_departement = code_departement
    }

    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column()
    code_departement : number
    @Column()
    code_region : number
    @Column()
    nom : string
    @Column()
    population_masculin : number
    @Column()
    population_feminin : number
    @Column()
    population_totale : number
    @Column()
    mis_a_jour : boolean
    @Column()
    accessible : boolean
    @Column({nullable: true})
    date_creation: string
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    densite: number
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    superficie: number
    @Column()
    nb_commune : number
    @Column()
    nb_localite : number

}

