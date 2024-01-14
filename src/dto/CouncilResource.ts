import { CouncilResource } from "../entities/CouncilResource"

export class CouncilResourceDTO {
    constructor(res : CouncilResource){ 
        this.council = res.council
        this.department = res.department
        this.region = res.region
        this.sector = res.sector
        this.activities= res.activities
        this.problems = res.problems
        this.potentialities = res.potentialities
        this.resources = res.resources
    }
    id : number
    council : string
    department : string
    region : string
    sector : string
    activities : string[]
    problems : string[]
    potentialities: string[]
    resources: string[]
}


