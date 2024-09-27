import { ToughtModel } from "../../../app/models/Tought";
import { AppDataSource } from "../../../app/database/app.database";

export class ToughtRepository {
	private toughtRepository = AppDataSource.getRepository(ToughtModel);

	async findAll() {
		return this.toughtRepository.find({ relations: ["user"] });
	}

	async findById(id: number) {
		return this.toughtRepository.findOne({
			where: { id },
			relations: ["user"],
		});
	}

	async create(tought: ToughtModel) {
		return this.toughtRepository.save(tought);
	}

	async update(id: number, tought: Partial<ToughtModel>) {
		await this.toughtRepository.update(id, tought);
		return this.findById(id);
	}

	async delete(id: number) {
		return this.toughtRepository.delete(id);
	}
}
