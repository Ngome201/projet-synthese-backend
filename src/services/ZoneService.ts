import { AppDataSource } from "../app";
import { GenericService } from "./GenericService";
import { MyZone } from "../types";
import { Zone } from "../entities/Zone";

const zoneRepo = AppDataSource.getRepository(Zone)

export class ZoneService implements GenericService <Zone, number>{

    save(entity: Zone): Promise<Zone> {
        return zoneRepo.save(entity)
    }
    async findAll(): Promise<Zone[]> {
        return await zoneRepo.find()
    }
    async findByCommune(code_commune: number): Promise<Zone[]> {
        return await zoneRepo.find({where : {code_commune}})
    }
    async findByDepartement(code_departement: number): Promise<Zone[]> {
        return await zoneRepo.find({where : {code_departement}})
    }
    async findByRegion(code_region: number): Promise<Zone[]> {
        return await zoneRepo.find({where : {code_region}})
    }
    async findByPays(code_pays: number): Promise<Zone[]> {
        return await zoneRepo.find({where : {code_pays}})
    }

    async findByTypeZone(type_zone: MyZone, code_zone: number): Promise<Zone[]> {
        switch (type_zone) {
            case MyZone.Commune:
                return this.findByCommune(code_zone)
            case MyZone.Departement:
                return this.findByDepartement(code_zone)
            case MyZone.Region:
                return this.findByRegion(code_zone)
            case MyZone.Pays:
                return this.findByPays(code_zone)
            default:
                return this.findAll()
        }
    }

    async delete(id: string | number): Promise<any> {
        return zoneRepo.delete({id: id})
    }

}
