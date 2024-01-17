import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";
@Entity()
export class State11 extends Sharedprops{
    constructor(    year :string,
        rubric : number,functionIncome : number,fiscIncome : number,
        cac : number,tcd : number,tci : number,
        rrce : number,pf : number,tr : number,
        appd : number,ra : number,trf : number,
        ri : number,fd : number, ser : number,
        elmt : number,adlmt : number,rpaclmt : number,
        aic : number,pic : number,reserves : number, 
        code_commune : number
        )
    {
        super()
        this.year = year
         
    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    year :string

    @Column()
    rubric : number

    @Column()
    functionIncome : number

    @Column()
    fiscIncome : number
    
    @Column()
    cac : number

    @Column()
    tcd : number

    @Column()
    tci : number

    @Column()
    pedc : number

    @Column()
    rrce : number

    @Column()
    pf : number

    @Column()
    tr : number

    @Column()
    appd : number

    @Column()
    ra : number

    @Column()
    trf : number

    @Column()
    ri : number

    @Column()
    fd : number

    @Column()
    reserves : number

    @Column()
    ser : number

    @Column()
    elmt : number
    
    @Column()
    adlmt : number
    
    @Column()
    rpaclmt : number
    
    @Column()
    aic : number
    
    @Column()
    pic : number
    
        
    @Column()
    code_commune :  number
    
}