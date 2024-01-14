import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class Commune extends Sharedprops{
    constructor(code_commune: number, code_departement : number, nom: string, population_feminin : number, population_masculin : number,
        population_totale : number, date_creation: string, email: string, superficie: number, localisation: string, site: string,
        telephone: string, icone: string, image: string, accessible : boolean, densite: number, nb_localite : number){
        super()
        this.nom = nom
        this.code_commune = code_commune
        this.code_departement = code_departement
        this.population_feminin = population_feminin
        this.population_masculin = population_masculin
        this.population_totale = population_totale
        this.date_creation = date_creation
        this.email = email
        this.superficie = superficie
        this.localisation = localisation
        this.site = site
        this.telephone = telephone
        this.icone = icone
        this.image = image
        this.accessible = accessible
        this.densite = densite
        this.nb_localite = nb_localite
    }

    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column()
    code_commune : number
    @Column()
    code_departement : number
    @Column()
    nom : string
    @Column()
    population_feminin : number
    @Column()
    population_masculin : number
    @Column()
    population_totale : number
    @Column({nullable: true})
    date_creation: string
    @Column({nullable: true})
    email: string
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    superficie: number
    @Column({nullable: true})
    adresse: string
    @Column({nullable: true})
    localisation: string
    @Column({nullable: true})
    site: string
    @Column({nullable: true})
    telephone: string
    @Column({nullable: true})
    icone: string
    @Column({nullable: true})
    image: string
    @Column()
    accessible : boolean
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    densite: number
    @Column()
    nb_localite : number

}

