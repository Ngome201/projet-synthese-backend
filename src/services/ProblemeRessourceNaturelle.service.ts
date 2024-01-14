import { AppDataSource } from "../app";
import { GenericService } from "./GenericService";
import { ProblemeRessourceNaturelle } from "../entities/ProblemeRessourceNaturelle";
import { MyZone } from "../types";

const problemeRepo = AppDataSource.getRepository(ProblemeRessourceNaturelle)

export class ProblemeRessourceNaturelleService implements GenericService <ProblemeRessourceNaturelle, number>{

    save(entity: ProblemeRessourceNaturelle): Promise<ProblemeRessourceNaturelle> {
        return problemeRepo.save(entity)
    }
    async findAll(): Promise<ProblemeRessourceNaturelle[]> {
        return await problemeRepo.find()
    }
    async findByCommune(commune:string): Promise<ProblemeRessourceNaturelle[]> {
        return await problemeRepo.find({where : {commune:commune}})
    }
    async findByDepartement(departement:string): Promise<ProblemeRessourceNaturelle[]> {
        return await problemeRepo.find({where : {departement}})
    }
    async findByRegion(region:string): Promise<ProblemeRessourceNaturelle[]> {
        return await problemeRepo.find({where : {region}})
    }

    async findByZone(zone: MyZone, nom_zone: string): Promise<ProblemeRessourceNaturelle[]> {
        switch (zone) {
            case MyZone.Commune:
                return this.findByCommune(nom_zone)
            case MyZone.Departement:
                return this.findByDepartement(nom_zone)
            case MyZone.Region:
                this.findByRegion(nom_zone)
            default:
                return this.findAll()
        }
    }

    async delete(id: string | number): Promise<any> {
        return problemeRepo.delete({id: id})
    }

}
