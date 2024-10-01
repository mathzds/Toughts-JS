import { AppDataSource } from "../../../app/database/app.database";
import { ResponseModel } from "../../../app/models/Response";
import { UserModel } from "../../../app/models/User";

export class ResponseRepository {
	private responseRepository = AppDataSource.getRepository(ResponseModel);
	private userRepository = AppDataSource.getRepository(UserModel);

	async create(responseData: Partial<ResponseModel>) {
		const response = this.responseRepository.create(responseData);
		return await this.responseRepository.save(response);
	}

	async findByToughtId(toughtId: number) {
		return await this.responseRepository.find({
			where: { tought: { id: toughtId } },
			relations: ["user"],
		});
	}

	async getUserById(userId: number) {
		return await this.userRepository.findOneOrFail({ where: { id: userId } });
	}
}
