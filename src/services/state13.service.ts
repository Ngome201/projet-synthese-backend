import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State13 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state13Repository = AppDataSource.getRepository(State13)

export class State13Service implements GenericService<State13,number>{

    async findByZone(critere: MyZone, code: number): Promise<State13[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state13Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State13[]> {
        return await state13Repository.find()
    }
    async save(entity: State13): Promise<State13> {
        return await state13Repository.save(entity)
    }
    
}