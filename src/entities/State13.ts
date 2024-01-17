import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State13 extends Sharedprops{
    constructor(
        year : string,
        libelle : string,
        percentage : number,    
        code_commune: number){
        super()
        this.year= year
        this.libelle = libelle
        this.percentage = percentage
        this.code_commune = code_commune

    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    year :string

    @Column()
    libelle : string

    @Column()
    percentage : number

    @Column()
    code_commune : number
    
    

}