import { DataSource } from "typeorm";
import { UserModel } from "../models/User";
import { ToughtModel } from "../models/Tought";
import { ResponseModel } from "../models/Response";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "test",
	password: "test",
	database: "test",
	synchronize: true,
	logging: true,
	entities: [UserModel, ToughtModel, ResponseModel],
	subscribers: [],
	migrations: [],
});

export default function databaseHandler() {
	AppDataSource.initialize()
		.then(() => {
			console.log("Data Source has been initialized!");
		})
		.catch((err) => {
			console.error("Error during Data Source initialization:", err);
		});
}
