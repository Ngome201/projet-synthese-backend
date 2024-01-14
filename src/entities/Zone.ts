import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class Zone extends Sharedprops{
    constructor(nom: string, code_zone: number){
        super()
        this.nom = nom
        this.code_zone = code_zone
    }


    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column()
    code_zone : number
    @Column()
    code_pays : number
    @Column()
    pays : string
    @Column({nullable: true})
    code_region : number
    @Column({nullable: true})
    region : string
    @Column({nullable: true})
    code_departement : number
    @Column({nullable: true})
    departement : string
    @Column({nullable: true})
    code_commune : number
    @Column({nullable: true})
    commune : string
    @Column({nullable: true})
    code_localite : number
    @Column({nullable: true})
    localite : string
    @Column()
    nom : string
    @Column()
    z_niveau : number
    @Column()
    nb_region : number
    @Column()
    nb_departement : number
    @Column()
    nb_commune : number
    @Column()
    nb_localite : number
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    superficie : number
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    densite : number
    @Column({nullable: true})
    adresse: string
    @Column({nullable: true})
    date: string
    @Column({nullable: true})
    email: string
    @Column({nullable: true})
    telephone: string
    @Column({nullable: true})
    icone: string
    @Column({nullable: true})
    image: string
    @Column()
    population_masculin : number
    @Column()
    population_feminin : number    
    @Column()
    population_totale : number
    @Column()
    accessible : boolean    
    @Column({nullable: true})
    delimitation_json: string
    @Column({nullable: true})
    limites: string
    @Column({nullable: true})
    localisation: string
    
}

