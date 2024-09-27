import type { Hono } from "hono";
import { ToughtController } from "../../domain/modules/tought/tought.controller";

const toughtRoutes = (app: Hono) => {
	const toughtController = new ToughtController();

	app.get("/toughts", toughtController.getAll.bind(toughtController));
	app.get("/toughts/:id", toughtController.getById.bind(toughtController));
	app.post("/toughts", toughtController.create.bind(toughtController));
	app.put("/toughts/:id", toughtController.update.bind(toughtController));
	app.delete("/toughts/:id", toughtController.delete.bind(toughtController));
};

export default toughtRoutes;
