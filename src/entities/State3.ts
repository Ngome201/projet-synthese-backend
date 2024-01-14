import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

//state 3
@Entity()
export class State3 extends Sharedprops{
    constructor(name:string,start:string,end:string,occupation:string,code_commune:number){
        super()
        this.name = name
        this.start = start
        this.end = end
        this.occupation = occupation
        this.code_commune = code_commune
    }
    @PrimaryGeneratedColumn()
    id : number
    @Column({nullable:true})
    name : string
    @Column({nullable:true})
    start : string
    @Column({nullable:true})
    end : string
    @Column({nullable:true})
    occupation : string
    @Column({nullable:true})
    code_commune : number

}