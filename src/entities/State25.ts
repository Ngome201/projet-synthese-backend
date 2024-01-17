import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State25 extends Sharedprops{
    constructor(
        problemes : string[],    
        causes : string[],    
        effets : string[],    
        solutions : string[], 
        cout : string,
        secteur : string,
        code_commune: number){
        super()
        this.secteur= secteur
        this.problemes = problemes
        this.causes = causes
        this.effets = effets
        this.solutions=solutions
        this.cout=cout
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column("text",{array:true,nullable:true})
    problemes : string[]

    @Column("text",{array:true,nullable:true})
    causes : string[]

    @Column("text",{array:true,nullable:true})
    effets : string[]

    @Column("text",{array:true,nullable:true})
    solutions : string[]

    @Column("text",{array:true,nullable:true})
    cout : string

    @Column()
    secteur :string

    @Column()
    code_commune : number
    
    

}