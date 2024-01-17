import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State16 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state16Repository = AppDataSource.getRepository(State16)

export class State16Service implements GenericService<State16,number>{

    async findByZone(critere: MyZone, code: number): Promise<State16[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state16Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State16[]> {
        return await state16Repository.find()
    }
    async save(entity: State16): Promise<State16> {
        return await state16Repository.save(entity)
    }
    
}