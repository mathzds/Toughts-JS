import { Jwt } from "hono/utils/jwt";

function authGuard(email: string, id: number) {
	return Jwt.sign({ email, id }, "secret", "HS256");
}

export default authGuard;
