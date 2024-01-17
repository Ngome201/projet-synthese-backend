import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State9 extends Sharedprops{
    constructor(libelle : string,
                functionExpense : string,
                personExpense : string,
                investmentExpense : string,
                code_commune : number
    ){
        super()
        this.libelle=libelle
        this.functionExpense=functionExpense
        this.investmentExpense=investmentExpense
        this.personExpense = personExpense
        this.code_commune = code_commune
    }
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    libelle : string

    @Column()
    functionExpense : string
    
    @Column()
    personExpense : string
    
    @Column()
    investmentExpense : string

    @Column({nullable:true})
    code_commune : number

    
}