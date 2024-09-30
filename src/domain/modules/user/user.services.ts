import { AppDataSource } from "../../../app/database/app.database";
import { UserModel } from "../../../app/models/User";
import authGuard from "../../middlewares/auth.guard";

export class UserService {
	private userRepository = AppDataSource.getRepository(UserModel);

	async getAllUsers() {
		return await this.userRepository.find();
	}

	async getUserById(id: number) {
		return await this.userRepository.findOne({ where: { id } });
	}

	async createUser(data: Partial<UserModel>) {
		const user = this.userRepository.create(data);
		return await this.userRepository.save(user);
	}

	async updateUser(id: number, data: Partial<UserModel>) {
		await this.userRepository.update(id, data);
		return await this.getUserById(id);
	}

	async deleteUser(id: number) {
		await this.userRepository.delete(id);
	}

	async loginUser(email: string, senha: string) {
		if (!email || !senha) {
			throw new Error("Missing required fields");
		}

		const user = await this.userRepository.findOne({
			where: { email, senha },
		});

		if (!user) throw new Error("User not found");

		return authGuard(user.email, user.id);
	}
}
