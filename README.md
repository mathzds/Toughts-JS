```
npm install
npm run dev
```

```
open http://localhost:3000
```

- Users
* Create
POST http://localhost:3000/users
Content-Type: application/json
{
    "username": "novoUsuario",
    "email": "usuario@example.com",
    "senha": "senhaSegura123"
}

* Get all
GET http://localhost:3000/users
Content-Type: application/json

* Get by ID
GET http://localhost:3000/users/1
Content-Type: application/json

* Update user
PUT http://localhost:3000/users/1
Content-Type: application/json
{
    "username": "usuarioAtualizado",
    "email": "usuarioAtualizado@example.com"
}

* Delete user
DELETE http://localhost:3000/users/1
Content-Type: application/json

* Login
POST http://localhost:3000/users/login/me
Content-Type: application/json
{
    "email": "usuario@example.com",
    "senha": "senhaSegura123"
}

* Auth
GET http://localhost:3000/users/auth/me
Authorization: Bearer <seu_token_aqui>

- Tought
* Post tought
POST http://localhost:3000/toughts
Content-Type: application/json
{
    "title": "Meu Primeiro Tought"
}

* Get all
GET http://localhost:3000/toughts
Content-Type: application/json

* Get by ID
GET http://localhost:3000/toughts/1
Content-Type: application/json

* Update
PUT http://localhost:3000/toughts/1
Content-Type: application/json
{
    "title": "Título Atualizado do Tought"
}

* Delete
DELETE http://localhost:3000/toughts/1
Content-Type: application/json

* Reply
POST http://localhost:3000/toughts/1/response
Content-Type: application/json
{
    "userId": 42,
    "content": "Esta é uma resposta ao tought."
}

* Get replies
GET http://localhost:3000/toughts/1/responses
Content-Type: application/json

