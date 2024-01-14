import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State8 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";
const ccService = new CommuneCodeService()
const state8Repository = AppDataSource.getRepository(State8)

export class State8Service implements GenericService <State8,number>{

    async findByZone(critere: MyZone, code: number): Promise<State8[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return state8Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }

    async findAll(): Promise<State8[]> {
        return await state8Repository.find()
    }
    async save(entity: State8): Promise<State8> {
        return await state8Repository.save(entity)
    }

}