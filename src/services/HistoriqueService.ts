import { AppDataSource } from "../app";
import { Historique } from "../entities/Historique";
import { GenericService } from "./GenericService";


const histRepo = AppDataSource.getRepository(Historique)

export class HistoriqueService implements GenericService <Historique, number>{

    save(entity: Historique): Promise<Historique> {
        return histRepo.save(entity)
    }
    async findAll(): Promise<Historique[]> {
        return await histRepo.find({order: {date_creation: "DESC"}})
    }
    async findByCodeZone(code_zone: number): Promise<Historique[]> {
        return await histRepo.find({where : {code_zone}, order: {date_creation: "DESC"}})
    }
    async findByTypeZone(type_zone: number): Promise<Historique[]> {
        return await histRepo.find({where : {type_zone}, order: {date_creation: "DESC"}})
    }
    async findByNumeroEtat(numero_etat: number): Promise<Historique[]> {
        return await histRepo.find({where : {numero_etat}, order: {date_creation: "DESC"}})
    }
    async findByUtilisateur(utilisateur: string): Promise<Historique[]> {
        return await histRepo.find({where : {utilisateur}, order: {date_creation: "DESC"}})
    }

    async delete(id: string | number): Promise<any> {
        return histRepo.delete({id: id})
    }

}
