import { AppDataSource } from "../app";
import { GenericService } from "./GenericService";
import { State4 } from "../entities/State4";
import { CommuneCodeService } from "./CommuneCode.service";
import { MyZone } from "../types";
import { In } from "typeorm";

const ccService = new CommuneCodeService()
const state4repo = AppDataSource.getRepository(State4)

export class State4Service implements GenericService <State4,number>{
    async findByZone(critere: MyZone, code: number): Promise<State4[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state4repo.findBy({ 
            code_commune: In(code_list) 
        })
    }
    async save(entity: State4): Promise<State4> {
        return await state4repo.save(entity)
    }
    async findAll(): Promise<State4[]> {
        return await state4repo.find()
    }
    async findByCouncil(council:string): Promise<State4> {
        return await state4repo.findOne({where : {code_commune:council}})
    }

}