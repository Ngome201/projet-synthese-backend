export interface GenericService <T,V>{
    findAll():Promise <T[]>
    save(entity : T):Promise <T>
}