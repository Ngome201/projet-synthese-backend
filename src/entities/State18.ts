import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";
import { ADDRCONFIG } from "dns";

@Entity()
export class State18 extends Sharedprops{
    constructor(
        village : string,
        femmes : string[],
        hommes : string[],    
        total : string[],    
        nourrissons : string[],    
        popcible : string[],    
        popageprescolaire: number,
        popagescolprimaire: number,
        ado: number,
        popjeunes: number,
        code_commune: number){
        super()
        this.vilage= village
        this.femmes = femmes
        this.hommes = hommes
        this.total = total
        this.nourrissons = nourrissons
        this.popcible= popcible
        this.popagepreescolaire= popageprescolaire
        this.popageprimaire= popagescolprimaire
        this.ado=ado
        this.popjeunes=popjeunes
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    vilage :string

    @Column()
    femmes : string[]

    @Column()
    hommes : string[]

    @Column()
    total : string[]

    @Column()
    nourrissons : string[]

    @Column()
    popcible : string[]

    @Column()
    popagepreescolaire : number

    @Column()
    popageprimaire : number
    
    @Column()
    ado : number
    
    @Column()
    popjeunes : number
    @Column()
    code_commune : number
    
}