import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State21 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state21State21Repository = AppDataSource.getRepository(State21)

export class State21Service implements GenericService<State21,number>{

    async findByZone(critere: MyZone, code: number): Promise<State21[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state21State21Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State21[]> {
        return await state21State21Repository.find()
    }
    async save(entity: State21): Promise<State21> {
        return await state21State21Repository.save(entity)
    }
    
}