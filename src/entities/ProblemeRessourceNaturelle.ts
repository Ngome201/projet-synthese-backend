import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Sharedprops } from "./SharedProps";

/** Entité actuellement inutile. Ignorez la juste. */

@Entity()
export class ProblemeRessourceNaturelle extends Sharedprops{
    constructor(commune:string, departement:string, region:string, probleme:string){
        super()
        this.commune = commune
        this.departement = departement
        this.region = region
        this.probleme = probleme
    }

    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id : string | number
    @Column()
    commune : string
    @Column()
    departement : string
    @Column()
    region : string
    @Column()
    probleme : string
}
