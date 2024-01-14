import { Column, Double, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class Pays extends Sharedprops{
    constructor(nom: string, code_pays: number){
        super()
        this.nom = nom
        this.code_pays = code_pays
    }
    		
    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column()
    code_pays : number
    @Column()
    nom : string
    @Column()
    population_masculin : number
    @Column()
    population_feminin : number
    @Column()
    population_totale : number
    @Column()
    accessible : boolean
    @Column()
    date_creation: string
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    densite: number
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    superficie: number
    @Column()
    nb_region : number
    @Column()
    nb_departement : number
    @Column()
    nb_commune : number
    @Column()
    nb_localite : number
    @Column({nullable:true})
    date_independance : string
    @Column({nullable:true})
    date_reunification : string
    @Column({nullable:true})
    date_unification : string

}

