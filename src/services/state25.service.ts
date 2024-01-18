import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State25 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state25State25Repository = AppDataSource.getRepository(State25)

export class State25Service implements GenericService<State25,number>{

    async findByZone(critere: MyZone, code: number): Promise<State25[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state25State25Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State25[]> {
        return await state25State25Repository.find()
    }
    async save(entity: State25): Promise<State25> {
        return await state25State25Repository.save(entity)
    }
    
}