import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State7 } from "../entities/State7";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";
const ccService = new CommuneCodeService()
const state7Repository = AppDataSource.getRepository(State7)
export class State7Service implements GenericService <State7,number>{
    async findAll(): Promise<State7[]> {
        return await state7Repository.find()
    }
    async save(entity: State7): Promise<State7> {
        return await state7Repository.save(entity)
    }
    async findByZone(critere: MyZone, code: number): Promise<State7[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state7Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
}