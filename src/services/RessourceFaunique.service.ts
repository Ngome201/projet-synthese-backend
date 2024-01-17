import { AppDataSource } from "../app";
import { GenericService } from "./GenericService";
import { RessourceFaunique } from "../entities/RessourceFaunique";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { In } from "typeorm";

const ressourceFauniqueRepo = AppDataSource.getRepository(RessourceFaunique)
const ccService = new CommuneCodeService()

export class RessourceFauniqueService implements GenericService <RessourceFaunique, number>{

    save(entity: RessourceFaunique): Promise<RessourceFaunique> {
        return ressourceFauniqueRepo.save(entity)
    }
    async findAll(): Promise<RessourceFaunique[]> {
        return ressourceFauniqueRepo.find()
    }

    async findByZone(type_zone: MyZone, code_zone: number): Promise<RessourceFaunique[]> {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(type_zone, code_zone)

        return ressourceFauniqueRepo.findBy({ 
            code_commune: In(code_list) 
        })
    }

    async delete(id: string | number): Promise<any> {
        return ressourceFauniqueRepo.delete({id: id})
    }

}
