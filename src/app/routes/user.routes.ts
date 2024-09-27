import type { Hono } from "hono";
import { UserController } from "../../domain/modules/user/user.controller";
import { jwt } from "hono/jwt";

const userRoutes = (app: Hono) => {
	const userController = new UserController();

	app.get("/users", userController.getAll.bind(userController));
	app.get("/users/:id", userController.getById.bind(userController));
	app.post("/users", userController.create.bind(userController));
	app.put("/users/:id", userController.update.bind(userController));
	app.delete("/users/:id", userController.delete.bind(userController));
	app.post("/users/login/me", userController.login.bind(userController));
	app.get("/users/auth/me", jwt({ secret: "secret", alg: "HS256" }), (c) =>
		c.text("ola"),
	);
};

export default userRoutes;
