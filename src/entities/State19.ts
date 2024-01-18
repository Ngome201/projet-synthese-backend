import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State19 extends Sharedprops{
    constructor(
        typeEspece : string,
        effectif :number,
        code_commune: number)
        {
        super()
        this.typeEspece= typeEspece
        this.effectif = effectif
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    typeEspece :string

    @Column()
    effectif :number

    @Column()
    code_commune : number
}