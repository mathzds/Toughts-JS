import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ResponseModel } from "./Response"; 
import { UserModel } from "./User";

@Entity()
export class ToughtModel {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255 })
    title!: string;

    @ManyToOne(() => UserModel, (user) => user.toughts)
    user!: UserModel;

    @OneToMany(() => ResponseModel, (response) => response.tought)
    responses!: ResponseModel[];
}
