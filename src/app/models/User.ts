import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ToughtModel } from "./Tought";
import { ResponseModel } from "./Response";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    username!: string;

    @Column({ type: "varchar", length: 255, unique: true, nullable: false }) 
    email!: string; 

	@Column({ type: "varchar", length: 255, nullable: false })
	senha!: string;

    @OneToMany(() => ToughtModel, (tought) => tought.user)
    toughts!: ToughtModel[];

    @OneToMany(() => ResponseModel, (response) => response.user)
    responses!: ResponseModel[];
}
