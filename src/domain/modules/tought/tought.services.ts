import { AppDataSource } from "../../../app/database/app.database";
import { ToughtModel } from "../../../app/models/Tought";

export class ToughtService {
    private toughtRepository = AppDataSource.getRepository(ToughtModel);

    async getAllToughts() {
        return await this.toughtRepository.find({ relations: ["user"] });
    }

    async getToughtById(id: number) {
        return await this.toughtRepository.findOne({ where: { id }, relations: ["user"] });
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
}
