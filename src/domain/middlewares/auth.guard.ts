import { Jwt } from "hono/utils/jwt";

function authGuard(email: string, password: string) {
	return Jwt.sign({ email, password }, "secret", "HS256");
}

export default authGuard;
