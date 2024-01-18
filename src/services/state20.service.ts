import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State20 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state20State20Repository = AppDataSource.getRepository(State20)

export class State20Service implements GenericService<State20,number>{

    async findByZone(critere: MyZone, code: number): Promise<State20[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state20State20Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State20[]> {
        return await state20State20Repository.find()
    }
    async save(entity: State20): Promise<State20> {
        return await state20State20Repository.save(entity)
    }
    
}