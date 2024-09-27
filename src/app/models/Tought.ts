import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserModel } from "./User"; 

@Entity()
export class ToughtModel {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255 })
    title!: string;

    @ManyToOne(() => UserModel, (user) => user.toughts)
    user!: UserModel;
}
