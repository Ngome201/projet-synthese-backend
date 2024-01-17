import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State20 extends Sharedprops{
    constructor(
        especesElevees : string,
        effectifEleveurs : string,
        modeElevage : string[],    
        effectif : string,    
        bassinProduction : string,    
        code_commune: number){
        super()
        this.especesElevees= especesElevees
        this.effectifEleveurs = effectifEleveurs
        this.modeElevage = modeElevage
        this.effectif = effectif
        this.bassinProduction = bassinProduction
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    especesElevees :string

    @Column("text",{array:true,nullable:true})
    effectifEleveurs : string

    @Column("text",{array:true,nullable:true})
    modeElevage : string[]

    @Column()
    effectif : string

    @Column()
    bassinProduction : string

    @Column()
    code_commune : number
    
    

}