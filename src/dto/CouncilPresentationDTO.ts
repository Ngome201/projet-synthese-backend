import { CouncilPresentation} from '../entities/CouncilPresentation';


export class CouncilPresentationDTO {
    constructor(res : CouncilPresentation){

        this.code_commune = res.code_commune
        this.name =res.name
        this.location = res.location
        this.limits = res.limits
        this.createDate = res.createDate
        this.commissioningDate= res.commissioningDate
        this.adress = res.adress
        this.population = res.population
        this.density = res.density
        this.surface= res.surface
        this.ethnic_group = res.ethnic_group
        this.Number_of_villages = res.Number_of_villages
        
    }
    id : number
    code_commune : number
    name : string
    location : string
    limits : string
    createDate : Date
    commissioningDate : Date
    adress : string
    population : number
    density : number
    surface : number
    ethnic_group : string
    Number_of_villages : number
}


