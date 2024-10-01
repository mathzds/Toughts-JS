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

	async createResponse(c: Context) {
		const toughtId = Number(c.req.param("toughtId"));

		const requestData = await c.req.json();

		const userId = Number(requestData.userId);

		if (!userId) {
			return c.text("User ID is required", 400);
		}

		const newResponseData = {
			content: requestData.content,
		};

		try {
			const newResponse = await this.toughtService.createResponse(
				toughtId,
				newResponseData,
				userId,
			);
			return c.json(newResponse, 201);
		} catch (error) {
			console.error("Error creating response:", error);
			return c.text("Failed to create response", 500);
		}
	}

	async getResponses(c: Context) {
		const toughtId = Number(c.req.param("toughtId"));
		const responses = await this.toughtService.getResponsesByToughtId(toughtId);
		return c.json(responses);
	}
}
