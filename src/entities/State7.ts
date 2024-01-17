import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";
@Entity()
export class State7 extends Sharedprops{
    constructor(localName:string,commerceName:string,scientistName:string,usage:string,code_commune:number){
        super()
        this.localName = localName
        this.commerceName = commerceName
        this.scientistName = scientistName
        this.usage = usage
        this.code_commune  = code_commune
    }

    @PrimaryGeneratedColumn()
    id : number
    
    @Column({nullable:true})
    localName : string
    
    @Column({nullable:true})
    code_commune : number
   
    
    @Column({nullable:true})
    commerceName : string
    
    @Column({nullable:true})
    scientistName : string
    
    @Column({nullable:true})
    usage : string
    
}