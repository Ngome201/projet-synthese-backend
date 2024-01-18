import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State18 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state18State18Repository = AppDataSource.getRepository(State18)

export class State18Service implements GenericService<State18,number>{

    async findByZone(critere: MyZone, code: number): Promise<State18[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state18State18Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State18[]> {
        return await state18State18Repository.find()
    }
    async save(entity: State18): Promise<State18> {
        return await state18State18Repository.save(entity)
    }
    
}