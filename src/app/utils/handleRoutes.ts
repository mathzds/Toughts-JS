import type { Hono } from "hono";
import userRoutes from "../routes/user.routes";
import toughtRoutes from "../routes/tought.routes";

const handlerRoutes = (app: Hono) => {
	userRoutes(app);
	toughtRoutes(app);
};
export default handlerRoutes;
