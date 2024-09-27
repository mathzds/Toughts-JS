import type { Context } from "hono";
import { UserService } from "./user.services";

export class UserController {
	private userService = new UserService();

	async getAll(c: Context) {
		const users = await this.userService.getAllUsers();
		return c.json(users); 
	}

	async getById(c: Context) {
		const id = Number(c.req.param("id")); 
		const user = await this.userService.getUserById(id);
		try {
			return c.json(user);
		} catch (error) {
			return c.text(`User not found + ${error}`, 404); 
		}
	}

	async create(c: Context) {
		const newUser = await this.userService.createUser(await c.req.json()); 
		return c.json(newUser, 201);
	}

	async update(c: Context) {
		const id = Number(c.req.param("id")); 
		const updatedUser = await this.userService.updateUser(
			id,
			await c.req.json(), 
		);
		return c.json(updatedUser);
	}

	async delete(c: Context) {
		const id = Number(c.req.param("id")); 
		await this.userService.deleteUser(id);
		return c.text("Deleted");
	}
}
