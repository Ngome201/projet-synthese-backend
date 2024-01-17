import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class User extends Sharedprops{
    constructor(){
        super()
    }
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstname : string;
    
    @Column()
    lastname : string;



}