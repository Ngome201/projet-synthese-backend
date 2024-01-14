import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class CouncilPresentation extends Sharedprops{
    constructor(code_commune: number, name:string, location:string, limits:string, createDate : Date ,commissioningDate:Date, adress:string, 
        population:number,density:number, surface:number, ethnic_group:string, Number_of_villages:number){

        super()
        this.code_commune = code_commune
        this.name =name
        this.location = location
        this.limits = limits
        this.createDate = createDate
        this.commissioningDate= commissioningDate
        this.adress =adress
        this.population = population
        this.density = density
        this.surface= surface
        this.ethnic_group =ethnic_group
        this.Number_of_villages = Number_of_villages
        
    }
    @PrimaryGeneratedColumn()
    id : string | number
    @Column()
    code_commune : number
    @Column({nullable:true})
    name : string
    @Column({nullable:true})
    location : string
    @Column({nullable:true})
    limits : string
    @Column({nullable:true})
    createDate : Date
    @Column({nullable:true})
    commissioningDate : Date
    @Column({nullable:true})
    adress : string
    @Column({nullable:true})
    population : number
    @Column({nullable:true})
    density : number
    @Column({nullable:true})
    surface : number
    @Column({nullable:true})
    ethnic_group : string
    @Column({nullable:true})
    Number_of_villages : number
}



// @Column()
// actvities : string
// @Column()
// problems : string
// @Column()
// potentialities: string
// @Column()
// resources: string