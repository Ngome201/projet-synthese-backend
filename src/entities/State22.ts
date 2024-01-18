import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State22 extends Sharedprops{
    constructor(
        culturePratiquee : string[],
        outils : string[],
        problemes : string[],    
        atouts : string[],    
        principauxOrgAppui : string[],    
        code_commune: number){
        super()
        this.culturePratiquee= culturePratiquee
        this.outils = outils
        this.problemes = problemes
        this.atouts = atouts
        this.principauxOrgAppui = principauxOrgAppui
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column("text",{array:true,nullable:true})
    culturePratiquee :string[]

    @Column("text",{array:true,nullable:true})
        outils : string[]

    @Column("text",{array:true,nullable:true})
    problemes : string[]

    @Column("text",{array:true,nullable:true})
    atouts : string[]

    @Column("text",{array:true,nullable:true})
    principauxOrgAppui : string[]

    @Column()
    code_commune : number
    
    

}