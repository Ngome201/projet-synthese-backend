import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Sharedprops{
    @CreateDateColumn()
    createdAt : string;
    @UpdateDateColumn()
    updatedAt : string;
}