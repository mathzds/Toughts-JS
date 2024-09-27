import type { Context } from "hono";
import { ToughtService } from "./tought.services";

export class ToughtController {
	private toughtService = new ToughtService();

	async getAll(c: Context) {
		const toughts = await this.toughtService.getAllToughts();
		return c.json(toughts);
	}

	async getById(c: Context) {
		const id = Number(c.req.param("id"));
		const tought = await this.toughtService.getToughtById(id);
		try {
			return c.json(tought);
		} catch (error) {
			return c.text(`Tought not found + ${error}`, 404);
		}
	}

	async create(c: Context) {
		const newTought = await this.toughtService.createTought(await c.req.json());
		return c.json(newTought, 201);
	}

	async update(c: Context) {
		const id = Number(c.req.param("id"));
		const updatedTought = await this.toughtService.updateTought(
			id,
			await c.req.json(),
		);
		return c.json(updatedTought);
	}

	async delete(c: Context) {
		const id = Number(c.req.param("id"));
		await this.toughtService.deleteTought(id);
		return c.text("Deleted");
	}
}
