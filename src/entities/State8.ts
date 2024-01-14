import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Sharedprops } from "./SharedProps"

@Entity()
export class State8 extends Sharedprops{
    constructor(code_commune: number, localName:string,commerceName:string,scientistName:string,usage:string){
        super()
        
    }
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    code_commune : number

    @Column()
    year : string
    
    @Column()
    state : string
    
    @Column()
    functionIncome : string
    
    @Column()
    InvestIncome : string
    
    @Column()
    functionExpense : string
    
    @Column()
    Expense : string
}