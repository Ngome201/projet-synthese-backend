import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State4 extends Sharedprops{
    constructor(code_commune:string,activities:string[],problems:string[],potentialities:string[],resources:string[],sector:string){
        super()
        this.code_commune =code_commune
        this.activities= activities
        this.problems =problems
        this.potentialities = potentialities
        this.resources = resources
        this.sector = sector
    }
    @PrimaryGeneratedColumn()
    id : number
    @Column({nullable:true})
    code_commune : string
    @Column("text",{array:true,nullable:true})
    activities : string[]
    @Column("text",{array:true,nullable:true})
    problems : string[]
    @Column("text",{array:true,nullable:true})
    potentialities: string[]
    @Column("text",{array:true,nullable:true})
    resources: string[]
    @Column({nullable:true})
    sector: string
}

