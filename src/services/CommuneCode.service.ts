import { AppDataSource } from "../app";
import { MyZone } from "../types";
import { Zone } from "../entities/Zone";

const zoneRepo = AppDataSource.getRepository(Zone)

export class CommuneCodeService {

    async getCommuneCodeByDepartement(code_departement: number): Promise<number[]> {
        return this.genericFunction({code_departement})
    }
    async getCommuneCodeByRegion(code_region: number): Promise<number[]> {
        return this.genericFunction({code_region})
    }
    async getCommuneCodeByPays(code_pays: number): Promise<number[]> {
        return this.genericFunction({code_pays})
    }

    async genericFunction(critere: Object): Promise<number[]> {
        let zones: Zone[] = await zoneRepo.createQueryBuilder("zone").where(critere)
                    .distinctOn(['zone.code_commune'])
                    .select(['zone.code_commune']).getMany()
        return zones.map((value) => value.code_commune)
    }

    async getCommuneCodeByTypeZone(type_zone: MyZone, code_zone: number): Promise<number[]> {
        switch (type_zone) {
            case MyZone.Commune:
                return [code_zone]
            case MyZone.Departement:
                return this.getCommuneCodeByDepartement(code_zone)
            case MyZone.Region:
                return this.getCommuneCodeByRegion(code_zone)
            case MyZone.Pays:
                return this.getCommuneCodeByPays(code_zone)
            default:
                return []
        }
    }

}
