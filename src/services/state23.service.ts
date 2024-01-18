import { In } from "typeorm";
import { AppDataSource } from "../app";
import { State23 } from "../entities";
import { MyZone } from "../types";
import { CommuneCodeService } from "./CommuneCode.service";
import { GenericService } from "./GenericService";

const ccService = new CommuneCodeService()
const state23State23Repository = AppDataSource.getRepository(State23)

export class State23Service implements GenericService<State23,number>{

    async findByZone(critere: MyZone, code: number): Promise<State23[]>  {
        let code_list: number[] = await ccService.getCommuneCodeByTypeZone(critere, code)

        return await state23State23Repository.findBy({ 
            code_commune: In(code_list) 
        })
    }
    
    async findAll(): Promise<State23[]> {
        return await state23State23Repository.find()
    }
    async save(entity: State23): Promise<State23> {
        return await state23State23Repository.save(entity)
    }
    
}