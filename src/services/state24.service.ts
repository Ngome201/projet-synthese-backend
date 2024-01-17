import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State24 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state24State24Repository = AppDataSource.getRepository(State24)

export class State24Service implements GenericService<State24,number>{

    async findByZone(critere: MyZone, code: number): Promise<State24[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state24State24Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State24[]> {
        return await state24State24Repository.find()
    }
    async save(entity: State24): Promise<State24> {
        return await state24State24Repository.save(entity)
    }
    
}