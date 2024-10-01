import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ToughtModel } from "./Tought"; 
import { UserModel } from "./User";

@Entity()
export class ResponseModel {
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({ type: "text" })
    content!: string;

    @ManyToOne(() => ToughtModel, (tought) => tought.responses)
    tought!: ToughtModel;

    @ManyToOne(() => UserModel, (user) => user.responses)
    user!: UserModel;
}
