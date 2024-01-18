import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State20 extends Sharedprops{
    constructor(
        especesElevees : string,
        effectifEleveurs : number,
        modeElevage : string[],    
        effectif : number,    
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

    @Column()
    effectifEleveurs : number

    @Column("text",{array:true,nullable:true})
    modeElevage : string[]

    @Column()
    effectif : number

    @Column()
    bassinProduction : string

    @Column()
    code_commune : number
    
    

}