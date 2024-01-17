import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State11 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state11Repository = AppDataSource.getRepository(State11)

export class State11Service implements GenericService<State11,number>{
    async findByZone(critere: MyZone, code: number): Promise<State11[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state11Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State11[]> {
        return await state11Repository.find()
    }
    async save(entity: State11): Promise<State11> {
        return await state11Repository.save(entity)
    }
    
}