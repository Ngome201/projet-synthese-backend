import { CouncilSignage} from '../entities/CouncilSignage';
import { ConseillerMunicipal, PersonnelCommunal, Number_of_villages } from '../types';

export class CouncilSignageDTO{
    constructor(res : CouncilSignage){

        this.code_commune = res.code_commune
        this.createDate = res.createDate
        this.surface = res.surface
        this.population = res.population
        this.ethnic = res.ethnic
        this.regroupements = res.regroupements
        this.nbr_villages = res.nbr_villages
        this.degree = res.degree
        this.economic_activity= res.economic_activity
        this.economic_activity= res.economic_activity
        this.social_infrasture = res.social_infrasture
        this.nbr_femmes_council = res.nbr_femmes_council
        this.nbr_hommes_council = res.nbr_hommes_council
        this.nbr_deces_coucil = res.nbr_deces_coucil
        this.nbr_contractuels = res.nbr_contractuels
        this.nbr_decisionnaires = res.nbr_decisionnaires
        this.nbr_temporaires = res.nbr_temporaires
        this.nbr_fonctionnaires = res.nbr_fonctionnaires
        this.municipal_heritage= res.municipal_heritage
        this.relationship_network = res.relationship_network
        this.main_strengths = res.main_strengths
        this.main_weaknesses= res.main_weaknesses
        this.opportunities = res.opportunities
        this.obstacles = res.obstacles   
    }

    id : string | number 
    code_commune : number
    createDate : Date
    surface : number
    population : number
    ethnic : string
    regroupements : string[]
    nbr_villages : number
    degree : string[]
    economic_activity: string[]
    social_infrasture: string[]
    nbr_femmes_council : number
    nbr_hommes_council : number
    nbr_deces_coucil : number
    nbr_contractuels : number
    nbr_decisionnaires : number
    nbr_temporaires : number
    nbr_fonctionnaires : number
    municipal_heritage: string[]
    relationship_network: string[]
    main_strengths: string[]
    main_weaknesses: string[]
    opportunities: string[]
    obstacles: string[]
}



