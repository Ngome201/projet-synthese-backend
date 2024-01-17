import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State17 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state17Repository = AppDataSource.getRepository(State17)

export class State17Service implements GenericService<State17,number>{

    async findByZone(critere: MyZone, code: number): Promise<State17[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state17Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State17[]> {
        return await state17Repository.find()
    }
    async save(entity: State17): Promise<State17> {
        return await state17Repository.save(entity)
    }
    
}