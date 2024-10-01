Claro! Aqui está o conteúdo formatado para você copiar e colar diretamente no seu `README.md`:

```markdown
# API Documentation

## Início Rápido

Para iniciar o projeto, execute os seguintes comandos:

```
npm install
npm run dev
```

Em seguida, abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

## Users

### 1. Criar Usuário
**Endpoint**: `POST http://localhost:3000/users`  
**Content-Type**: `application/json`

**Corpo da Requisição**:
```json
{
    "username": "novoUsuario",
    "email": "usuario@example.com",
    "senha": "senhaSegura123"
}
```

### 2. Obter Todos os Usuários
**Endpoint**: `GET http://localhost:3000/users`  
**Content-Type**: `application/json`

### 3. Obter Usuário por ID
**Endpoint**: `GET http://localhost:3000/users/1`  
**Content-Type**: `application/json`

### 4. Atualizar Usuário
**Endpoint**: `PUT http://localhost:3000/users/1`  
**Content-Type**: `application/json`

**Corpo da Requisição**:
```json
{
    "username": "usuarioAtualizado",
    "email": "usuarioAtualizado@example.com"
}
```

### 5. Deletar Usuário
**Endpoint**: `DELETE http://localhost:3000/users/1`  
**Content-Type**: `application/json`

### 6. Login
**Endpoint**: `POST http://localhost:3000/users/login/me`  
**Content-Type**: `application/json`

**Corpo da Requisição**:
```json
{
    "email": "usuario@example.com",
    "senha": "senhaSegura123"
}
```

### 7. Autenticação
**Endpoint**: `GET http://localhost:3000/users/auth/me`  
**Authorization**: `Bearer <seu_token_aqui>`

---

## Toughts

### 1. Criar Tought
**Endpoint**: `POST http://localhost:3000/toughts`  
**Content-Type**: `application/json`

**Corpo da Requisição**:
```json
{
    "title": "Meu Primeiro Tought"
}
```

### 2. Obter Todos os Toughts
**Endpoint**: `GET http://localhost:3000/toughts`  
**Content-Type**: `application/json`

### 3. Obter Tought por ID
**Endpoint**: `GET http://localhost:3000/toughts/1`  
**Content-Type**: `application/json`

### 4. Atualizar Tought
**Endpoint**: `PUT http://localhost:3000/toughts/1`  
**Content-Type**: `application/json`

**Corpo da Requisição**:
```json
{
    "title": "Título Atualizado do Tought"
}
```

### 5. Deletar Tought
**Endpoint**: `DELETE http://localhost:3000/toughts/1`  
**Content-Type**: `application/json`

### 6. Responder a um Tought
**Endpoint**: `POST http://localhost:3000/toughts/1/response`  
**Content-Type**: `application/json`

**Corpo da Requisição**:
```json
{
    "userId": 42,
    "content": "Esta é uma resposta ao tought."
}
```

### 7. Obter Respostas de um Tought
**Endpoint**: `GET http://localhost:3000/toughts/1/responses`  
**Content-Type**: `application/json`

---

## Contribuições
Sinta-se à vontade para contribuir! Abra um issue ou um pull request se você tiver sugestões ou correções.

## Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).
