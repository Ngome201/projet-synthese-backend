import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State24 extends Sharedprops{
    constructor(
        secteur : string,
        tendances : string[],
        problemes : string[],    
        causes : string[],    
        effets : string[],
        potentielLocal : string[],    
        solutions : string[],    
        code_commune: number){
        super()
        this.secteur= secteur
        this.tendances = tendances
        this.problemes = problemes
        this.causes = causes
        this.effets = effets
        this.potentielLocal = potentielLocal
        this.solutions=solutions
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    secteur :string

    @Column("text",{array:true,nullable:true})
    tendances : string[]

    @Column("text",{array:true,nullable:true})
    problemes : string[]

    @Column("text",{array:true,nullable:true})
    causes : string[]

    @Column("text",{array:true,nullable:true})
    effets : string[]

    @Column("text",{array:true,nullable:true})
    potentielLocal : string[]

    @Column("text",{array:true,nullable:true})
    solutions : string[]

    @Column()
    code_commune : number
    
    

}