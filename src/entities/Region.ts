import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class Region extends Sharedprops{
    constructor(nom: string, code_region: number){
        super()
        this.nom = nom
        this.code_region = code_region
    }
	
    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
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
    code_pays : number
    @Column()
    accessible : boolean
    @Column({nullable: true})
    date_creation: string
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    densite: number
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    superficie: number
    @Column()
    nb_departement : number
    @Column()
    nb_commune : number
    @Column()
    nb_localite : number

}

