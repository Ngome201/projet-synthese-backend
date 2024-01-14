import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State3 } from "../entities/State3";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const state3repo = AppDataSource.getRepository(State3)
const ccService = new CommuneCodeService()

export class State3Service implements GenericService <State3,number>{
    async findByZone(critere: MyZone, code: number): Promise<State3[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state3repo.findBy({ 
            code_commune: In(code_list) 
        })
    }
    async save(entity: State3): Promise<State3> {
        return await state3repo.save(entity)
    }
    async findAll(): Promise<State3[]> {
        return await state3repo.find()
    }
}
