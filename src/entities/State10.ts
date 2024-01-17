import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";
@Entity()
export class State10 extends Sharedprops{
    constructor(
        year : string,
        totalIncome : number,
        populationSize : number,
        incomePerHab : number,    
        code_commune: number){
        super()
        this.year= year
        this.totalIncome = totalIncome
        this.populationSize = populationSize
        this.incomePerHab = incomePerHab
        this.code_commune = code_commune
    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    year :string

    @Column()
    totalIncome : number

    @Column()
    populationSize : number

    @Column()
    incomePerHab : number
    
    @Column()
    code_commune : number
    
    

}