import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State15 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state15Repository = AppDataSource.getRepository(State15)

export class State15Service implements GenericService<State15,number>{

    async findByZone(critere: MyZone, code: number): Promise<State15[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state15Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State15[]> {
        return await state15Repository.find()
    }
    async save(entity: State15): Promise<State15> {
        return await state15Repository.save(entity)
    }
    
}