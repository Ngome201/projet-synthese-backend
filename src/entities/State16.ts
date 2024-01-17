import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State16 extends Sharedprops{
    constructor(
        besoin : string,
        populationTotale :number,
        populationCouverte :number,
        ecarts :number,
        justificationEcart : string[],
        objectifGeneraux : string[],    
        principalesActivites : string[],    
        responsablePartenaire : string[],    
        code_commune: number){
        super()
        this.besoin= besoin
        this.populationCouverte = populationCouverte
        this.populationTotale = populationTotale
        this.ecarts = ecarts
        this.justificationEcart = justificationEcart
        this.objectifGeneraux = objectifGeneraux
        this.principalesActivites = principalesActivites
        this.responsablePartenaire = responsablePartenaire
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    besoin :string

    @Column()
    populationTotale :number

    @Column()
    populationCouverte :number
    
    @Column()
    ecarts :number
    

    @Column("text",{array:true,nullable:true})
    justificationEcart : string[]

    @Column("text",{array:true,nullable:true})
    objectifGeneraux : string[]

    @Column("text",{array:true,nullable:true})
    principalesActivites : string[]

    @Column("text",{array:true,nullable:true})
    responsablePartenaire : string[]

    @Column()
    code_commune : number
    
    

}