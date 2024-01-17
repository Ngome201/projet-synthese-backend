import { AppDataSource } from "../app";
import { GenericService } from "./GenericService";
import { TypeEtat } from "../entities/TypeEtat";

const typeEtatRepo = AppDataSource.getRepository(TypeEtat)

export class TypeEtatService implements GenericService <TypeEtat, number>{

    save(entity: TypeEtat): Promise<TypeEtat> {
        return typeEtatRepo.save(entity)
    }
    async findAll(): Promise<TypeEtat[]> {
        return typeEtatRepo.find({order: {numero: "ASC"}})
    }
    async delete(id: string | number): Promise<any> {
        return typeEtatRepo.delete({id: id})
    }

}
