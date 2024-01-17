import { AppDataSource } from "../app";
import { GenericService } from "./GenericService";
import { CouncilPresentation } from "../entities/CouncilPresentation";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { In } from "typeorm";

const councilPresentation = AppDataSource.getRepository(CouncilPresentation)
const ccService = new CommuneCodeService()

export class CouncilPresentationService implements GenericService <CouncilPresentation, number>{

    save(entity: CouncilPresentation): Promise<CouncilPresentation> {
        return councilPresentation.save(entity)
    }
    async findAll(): Promise<CouncilPresentation[]> {
        return councilPresentation.find()
    }

    async findByZone(type_zone: MyZone, code_zone: number): Promise<CouncilPresentation[]> {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(type_zone, code_zone)

        return councilPresentation.findBy({ 
            code_commune: In(code_list) 
        })
    }

    async delete(id: string | number): Promise<any> {
        return councilPresentation.delete({id: id})
    }

}
