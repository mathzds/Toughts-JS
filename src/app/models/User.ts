import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ToughtModel } from "./Tought";

@Entity()
export class UserModel {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: "varchar" })
	name!: string;

	@Column({ type: "varchar" })
	email!: string;

	@Column({ type: "varchar" })
	senha!: string;

	@OneToMany(
		() => ToughtModel,
		(tought) => tought.user,
	)
	toughts!: ToughtModel[];
}
