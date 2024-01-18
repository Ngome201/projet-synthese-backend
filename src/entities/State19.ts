import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State19 extends Sharedprops{
    constructor(
        typespece : string,
        bovin :number,
        ovin :number,
        caprin :number,
        pigeon: number,
        poulet : number,    
        pintades : number,    
        canards : number,    
        oies: number,
        dindons: number,
        lapin: number,
        code_commune: number)
        {
        super()
        this.typespece= typespece
        this.bovin = bovin
        this.ovin = ovin
        this.caprin = caprin
        this.pigeon = pigeon
        this.poulet = poulet
        this.pintades = pintades
        this.canards = canards
        this.oies = oies
        this.dindons = dindons
        this.lapin = 
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    typespece :string

    @Column()
    bovin :number

    @Column()
    ovin :number
    
    @Column()
    caprin :number
    

    @Column()
    pigeon : number

    @Column()
    poulet : number

    @Column()
    pintades: number

    @Column()
    canards : number

    @Column()
    oies : number

    @Column()
    dindons : number

    @Column()
    lapin : number
    
    @Column()
    code_commune : number
}