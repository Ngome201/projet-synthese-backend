import { AppDataSource } from "../app";
import { GenericService } from "./GenericService";
import { RessourceNaturelle } from "../entities/RessourceNaturelle";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { In } from "typeorm";

const RessourceNaturelleRepo = AppDataSource.getRepository(RessourceNaturelle)
const ccService = new CommuneCodeService()

export class RessourceNaturelleService implements GenericService <RessourceNaturelle, number>{

    save(entity: RessourceNaturelle): Promise<RessourceNaturelle> {
        return RessourceNaturelleRepo.save(entity)
    }
    async findAll(): Promise<RessourceNaturelle[]> {
        return RessourceNaturelleRepo.find()
    }

    async findByZone(type_zone: MyZone, code_zone: number): Promise<RessourceNaturelle[]> {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(type_zone, code_zone)

        return RessourceNaturelleRepo.findBy({ 
            code_commune: In(code_list) 
        })
    }

    async delete(id: string | number): Promise<any> {
        return RessourceNaturelleRepo.delete({id: id})
    }

}
