import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State14 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state14Repository = AppDataSource.getRepository(State14)

export class State14Service implements GenericService<State14,number>{

    async findByZone(critere: MyZone, code: number): Promise<State14[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state14Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State14[]> {
        return await state14Repository.find()
    }
    async save(entity: State14): Promise<State14> {
        return await state14Repository.save(entity)
    }
    
}