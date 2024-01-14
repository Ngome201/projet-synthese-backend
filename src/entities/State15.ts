import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State15 extends Sharedprops{
    constructor(
        aspectAnalyse : string,
        contraintes : string[],
        axeRenforcement : string[],    
        dateLimite : string,    
        besoinAppui : boolean,    
        code_commune: number){
        super()
        this.aspectAnalyse= aspectAnalyse
        this.contraintes = contraintes
        this.axeRenforcement = axeRenforcement
        this.dateLimite = dateLimite
        this.besoinAppui = besoinAppui
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    aspectAnalyse :string

    @Column("text",{array:true,nullable:true})
    contraintes : string[]

    @Column("text",{array:true,nullable:true})
    axeRenforcement : string[]

    @Column()
    dateLimite : string

    @Column()
    besoinAppui : boolean

    @Column()
    code_commune : number
    
    

}