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
		if (Number.isNaN(id)) {
			return c.json({ message: "Invalid ID" });
		}

		const user = await this.userService.getUserById(id);
		if (!user) {
			return c.json({ message: "User not found" });
		}

		return c.json(user);
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

	async login(c: Context) {
		const { email, senha } = await c.req.json();
		const user = await this.userService.loginUser(email, senha);
		console.log(user)
		return c.json(user);
	}
}
