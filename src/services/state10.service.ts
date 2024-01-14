import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State10 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const state10repo = AppDataSource.getRepository(State10)
const ccService = new CommuneCodeService()

export class State10Service implements GenericService<State10,number>{
    async findByZone(critere: MyZone, code: number): Promise<State10[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state10repo.findBy({ 
            code_commune: In(code_list) 
        })
    }
    async findAll(): Promise<State10[]> {
        return await state10repo.find()
    }
    async save(entity: State10): Promise<State10> {
        return await state10repo.save(entity)
    }
    
}