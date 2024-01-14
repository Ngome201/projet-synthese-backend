import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State9 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";
const ccService = new CommuneCodeService()
const state9Repository = AppDataSource.getRepository(State9)

export class State9Service implements GenericService<State9,number>{
    async findAll(): Promise<State9[]> {
        return await state9Repository.find()
    }
    async save(entity: State9): Promise<State9> {
        return await state9Repository.save(entity)
    }
    async findByZone(critere: MyZone, code: number): Promise<State9[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state9Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
}