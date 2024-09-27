import type { Hono } from "hono";
import { UserController } from "../../domain/modules/user/user.controller";

const userRoutes = (app: Hono) => {
    const userController = new UserController();

    app.get("/users", userController.getAll.bind(userController));
    app.get("/users/:id", userController.getById.bind(userController));
    app.post("/users", userController.create.bind(userController));
    app.put("/users/:id", userController.update.bind(userController));
    app.delete("/users/:id", userController.delete.bind(userController));
}

export default userRoutes;
