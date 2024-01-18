import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State23 extends Sharedprops{
    constructor(
        unitePaysage : string,
        caracteristiques : string,
        utilisationActuelle : string,    
        potentialites : string[],  
        contraintes : string[],  
        solEndogenes : string[],
        solEnvisagees : string[],    
        code_commune: number){
        super()
        this.unitePaysage = unitePaysage
        this.caracteristiques = caracteristiques
        this.utilisationActuelle =  utilisationActuelle
        this.potentialites =  potentialites
        this.solEndogenes = solEndogenes
        this.solEnvisagees = solEnvisagees
        this.contraintes = contraintes
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    unitePaysage :string

    @Column()
    caracteristiques : string

    @Column()
    utilisationActuelle : string

    @Column("text",{array:true,nullable:true})
    potentialites : string[]

    @Column("text",{array:true,nullable:true})
    solEndogenes : string[]

    @Column("text",{array:true,nullable:true})
    contraintes : string[]

    @Column("text",{array:true,nullable:true})
    solEnvisagees : string[]

    @Column()
    code_commune : number
    
    

}