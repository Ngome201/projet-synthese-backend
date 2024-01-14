import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";
import { ConseillerMunicipal, PersonnelCommunal, Number_of_villages } from "../types";

@Entity()
export class CouncilSignage extends Sharedprops{
    constructor(code_commune: number, createDate : Date, surface:number, population:number, ethnic:string, regroupements : string[],
        nbr_villages : number, degree : string[],economic_activity : string[], social_infrasture : string[], nbr_femmes_council : number, nbr_hommes_council : number,nbr_deces_coucil : number, nbr_contractuels : number,
        nbr_decisionnaires : number, nbr_temporaires : number, nbr_fonctionnaires : number, municipal_heritage: string[], 
        relationship_network:string[], main_strengths: string[], main_weaknesses: string[], opportunities: string[], obstacles: string[] ){

        super()
        this.code_commune =code_commune
        this.createDate =createDate
        this.surface = surface
        this.population = population
        this.ethnic = ethnic
        this.regroupements = regroupements
        this.nbr_villages = nbr_villages
        this.degree = degree
        this.economic_activity= economic_activity
        this.economic_activity= economic_activity
        this.social_infrasture =social_infrasture
        this.nbr_femmes_council = nbr_femmes_council
        this.nbr_hommes_council = nbr_hommes_council
        this.nbr_deces_coucil = nbr_deces_coucil
        this.nbr_contractuels = nbr_contractuels
        this.nbr_decisionnaires = nbr_decisionnaires
        this.nbr_temporaires = nbr_temporaires
        this.nbr_fonctionnaires = nbr_fonctionnaires
        this.municipal_heritage= municipal_heritage
        this.relationship_network =relationship_network
        this.main_strengths = main_strengths
        this.main_weaknesses= main_weaknesses
        this.opportunities =opportunities
        this.obstacles = obstacles    
    }
    @PrimaryGeneratedColumn()
    id : string | number 
    @Column()
    code_commune : number
    @Column({nullable:true})
    createDate : Date
    @Column({nullable:true})
    surface : number
    @Column({nullable:true})
    population : number
    @Column({nullable:true})
    nbr_femmes_council : number
    @Column({nullable:true})
    nbr_hommes_council : number
    @Column({nullable:true})
    nbr_deces_coucil : number
    @Column({nullable:true})
    nbr_contractuels : number
    @Column({nullable:true})
    nbr_decisionnaires : number
    @Column({nullable:true})
    nbr_temporaires : number
    @Column({nullable:true})
    nbr_fonctionnaires : number
    @Column({nullable:true})
    ethnic : string
    @Column({nullable:true})
    nbr_villages : number
    
    

    @Column("text",{array:true,nullable:true})
    economic_activity: string[]
    @Column("text",{array:true,nullable:true})
    social_infrasture: string[]
    @Column("text",{array:true,nullable:true})
    municipal_heritage: string[]
    @Column("text",{array:true,nullable:true})
    regroupements: string[]
    @Column("text",{array:true,nullable:true})
    degree: string[]
    @Column("text",{array:true,nullable:true})
    relationship_network: string[]
    @Column("text",{array:true,nullable:true})
    main_strengths: string[]
    @Column("text",{array:true,nullable:true})
    main_weaknesses: string[]
    @Column("text",{array:true,nullable:true})
    opportunities: string[]
    @Column("text",{array:true,nullable:true})
    obstacles: string[]
}



// @Column()
// actvities : string
// @Column()
// problems : string
// @Column()
// potentialities: string
// @Column()
// resources: string