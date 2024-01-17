import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class TypeEtat extends Sharedprops{
    constructor(numero: number, titre: string, description: string
        ){
        super()
        this.numero = numero
        this.titre = titre
        this.description = description
    }

    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column({unique: true})
    numero : number
    @Column()
    titre : string
    @Column({nullable: true})
    description : string
}

