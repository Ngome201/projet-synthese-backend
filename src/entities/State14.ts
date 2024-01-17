import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State14 extends Sharedprops{
    constructor(
        aspectAnalyse : string,
        contraintes : string[],
        opportunites : string[],    
        faiblesses : string[],    
        forces : string[],    
        solutions : string[],    
        code_commune: number){
        super()
        this.aspectAnalyse= aspectAnalyse
        this.contraintes = contraintes
        this.opportunites = opportunites
        this.faiblesses = faiblesses
        this.forces = forces
        this.solutions = solutions
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    aspectAnalyse :string

    @Column("text",{array:true,nullable:true})
    contraintes : string[]

    @Column("text",{array:true,nullable:true})
    opportunites : string[]

    @Column("text",{array:true,nullable:true})
    faiblesses : string[]

    @Column("text",{array:true,nullable:true})
    forces : string[]

    @Column("text",{array:true,nullable:true})
    solutions : string[]

    @Column()
    code_commune : number
    
    

}