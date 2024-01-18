import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State26 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state26State26Repository = AppDataSource.getRepository(State26)

export class State26Service implements GenericService<State26,number>{

    async findByZone(critere: MyZone, code: number): Promise<State26[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state26State26Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State26[]> {
        return await state26State26Repository.find()
    }
    async save(entity: State26): Promise<State26> {
        return await state26State26Repository.save(entity)
    }
    
}