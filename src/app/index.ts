import { serve } from "@hono/node-server";
import { Hono } from "hono";
import databaseHandler from "./database/app.database";
import handlerRoutes from "./utils/handleRoutes";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

const port = 3000;
console.log(`Server is running on port ${port}`);

export default function RunServer() {
	//Routers
	handlerRoutes(app);
	//Database
	databaseHandler();
	serve({
		fetch: app.fetch,
		port,
	});
}
