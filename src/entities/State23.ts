import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State23 extends Sharedprops{
    constructor(
        unitePaysage : string,
        caracteristiques : string[],
        utilisationActuelle : string[],    
        potentialites : string,    
        solEndogenes : string,
        solEnvisagees : string,    
        code_commune: number){
        super()
        this.unitePaysage = unitePaysage
        this.caracteristiques = caracteristiques
        this.utilisationActuelle =  utilisationActuelle
        this.potentialites =  potentialites
        this.solEndogenes = solEndogenes
        this.solEnvisagees = solEnvisagees
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    unitePaysage :string

    @Column("text",{array:true,nullable:true})
    caracteristiques : string[]

    @Column("text",{array:true,nullable:true})
    utilisationActuelle : string[]

    @Column()
    potentialites : string

    @Column()
    solEndogenes : string

    @Column()
    solEnvisagees : string

    @Column()
    code_commune : number
    
    

}