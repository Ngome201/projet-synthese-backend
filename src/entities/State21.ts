import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State21 extends Sharedprops{
    constructor(
        culture : string,
        bassinProduction : string, 
        superficieCultivees : string[],
        productionEstimees : string[],                   
        code_commune: number){
        super()
        this.culture = culture
        this.bassinProduction = bassinProduction
        this.superficieCultivees = superficieCultivees
        this.productionEstimees = productionEstimees  
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    culture :string

    @Column("text",{array:true,nullable:true})
    bassinProduction : string

    @Column("text",{array:true,nullable:true})
    superficieCultivees : string[]

    @Column()
    productionEstimees : string[]

    @Column()
    code_commune : number
    
    

}