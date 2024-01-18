import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State22 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state22State22Repository = AppDataSource.getRepository(State22)

export class State22Service implements GenericService<State22,number>{

    async findByZone(critere: MyZone, code: number): Promise<State22[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state22State22Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State22[]> {
        return await state22State22Repository.find()
    }
    async save(entity: State22): Promise<State22> {
        return await state22State22Repository.save(entity)
    }
    
}