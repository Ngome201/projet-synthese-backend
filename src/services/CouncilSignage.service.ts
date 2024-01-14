import { AppDataSource } from "../app";
import { GenericService } from "./GenericService";
import { CouncilSignage } from "../entities/CouncilSignage";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { In } from "typeorm";

const councilSignage = AppDataSource.getRepository(CouncilSignage)
const ccService = new CommuneCodeService()

export class CouncilSignageService implements GenericService <CouncilSignage, number>{

    save(entity: CouncilSignage): Promise<CouncilSignage> {
        return councilSignage.save(entity)
    }
    async findAll(): Promise<CouncilSignage[]> {
        return councilSignage.find()
    }

    async findByZone(type_zone: MyZone, code_zone: number): Promise<CouncilSignage[]> {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(type_zone, code_zone)

        return councilSignage.findBy({ 
            code_commune: In(code_list) 
        })
    }

    async delete(id: string | number): Promise<any> {
        return councilSignage.delete({id: id})
    }

}
