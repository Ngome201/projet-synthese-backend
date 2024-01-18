import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

@Entity()
export class State26 extends Sharedprops{
    constructor(
        coucheVulnerable : string,
        effConcerne : string[],
        effPresent : string[],    
        actvitePratiquees : string[],    
        rentabilite : string[],
        organisation : string[],    
        accesInfrastructures : string[],    
        code_commune: number){
        super()
        this.coucheVulnerable= coucheVulnerable
        this.effConcerne = effConcerne
        this.effPresent = effPresent
        this.actvitePratiquees = actvitePratiquees
        this.rentabilite = rentabilite
        this.organisation = organisation
        this.accesInfrastructures=accesInfrastructures
        this.code_commune = code_commune


    }

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    coucheVulnerable :string

    @Column("text",{array:true,nullable:true})
    effConcerne : string[]

    @Column("text",{array:true,nullable:true})
    effPresent : string[]

    @Column("text",{array:true,nullable:true})
    actvitePratiquees : string[]

    @Column("text",{array:true,nullable:true})
    rentabilite : string[]

    @Column("text",{array:true,nullable:true})
    organisation : string[]

    @Column("text",{array:true,nullable:true})
    accesInfrastructures : string[]

    @Column()
    code_commune : number
    
    

}