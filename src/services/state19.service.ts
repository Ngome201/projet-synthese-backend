import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State19 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state19State19Repository = AppDataSource.getRepository(State19)

export class State19Service implements GenericService<State19,number>{

    async findByZone(critere: MyZone, code: number): Promise<State19[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state19State19Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State19[]> {
        return await state19State19Repository.find()
    }
    async save(entity: State19): Promise<State19> {
        return await state19State19Repository.save(entity)
    }
    
}