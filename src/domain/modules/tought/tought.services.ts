import { AppDataSource } from "../../../app/database/app.database";
import type { ResponseModel } from "../../../app/models/Response";
import { ToughtModel } from "../../../app/models/Tought";
import { ResponseRepository } from "../response/response.repositorie";

export class ToughtService {
	private toughtRepository = AppDataSource.getRepository(ToughtModel);
	private responseRepository = new ResponseRepository();

	async getAllToughts() {
		return await this.toughtRepository.find({ relations: ["user"] });
	}

	async getToughtById(id: number) {
		return await this.toughtRepository.findOne({
			where: { id },
			relations: ["user"],
		});
	}

	async createTought(data: Partial<ToughtModel>) {
		const tought = this.toughtRepository.create(data);
		return await this.toughtRepository.save(tought);
	}

	async updateTought(id: number, data: Partial<ToughtModel>) {
		await this.toughtRepository.update(id, data);
		return await this.getToughtById(id);
	}

	async deleteTought(id: number) {
		await this.toughtRepository.delete(id);
	}
	async createResponse(
		toughtId: number,
		data: { content: string },
		userId: number,
	) {
		const tought = await this.toughtRepository.findOneByOrFail({
			id: toughtId,
		});
		const user = await this.responseRepository.getUserById(userId);

		if (!data.content) {
			throw new Error("Content is required for response");
		}

		const responseData: Partial<ResponseModel> = {
			content: data.content,
			tought: tought,
			user: user,
		};

		return await this.responseRepository.create(responseData);
	}

	async getResponsesByToughtId(toughtId: number) {
		return await this.responseRepository.findByToughtId(toughtId);
	}
}
