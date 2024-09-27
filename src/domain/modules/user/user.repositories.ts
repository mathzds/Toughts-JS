import { UserModel } from "../../../app/models/User";
import { AppDataSource } from "../../../app/database/app.database";

export class UserRepository {
	private userRepository = AppDataSource.getRepository(UserModel);

	async findAll() {
		return this.userRepository.find({ relations: ["toughts"] });
	}

	async findById(id: number) {
		return this.userRepository.findOne({
			where: { id },
			relations: ["toughts"],
		});
	}

	async create(user: UserModel) {
		return this.userRepository.save(user);
	}

	async update(id: number, user: Partial<UserModel>) {
		await this.userRepository.update(id, user);
		return this.findById(id);
	}

	async delete(id: number) {
		return this.userRepository.delete(id);
	}
}
