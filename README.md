# Delivery-api

## Crud Delivery API tem a funcionalidade de controlar uma lista de pedidos

### Funcionalidades

Criar pedido<br>
POST (http://localhost:3030/pedido)

```json
{
  "cliente": "Kenji",
  "produto": "Pizza de Queijo",
  "valor": 63
}
```

Encerrar conta<br>
DELETE (http://localhost:3030/account/{id})

Consultar o saldo de todas as contas<br>
GET (http://localhost:3030/account)

Consultar o saldo da conta<br>
GET (http://localhost:3030/account/{id})

Atualizar o cadastro da conta<br>
PUT (http://localhost:3030/account)

```json
{
  "id": 1,
  "name": "Kenji Sakai",
  "balance": 586
}
```

Fazer o depósito e saque na conta<br>
PATCH (http://localhost:3030/account/updateBalance)

```json
{
  "id": 1,
  "balance": 758
}
```

---

### Documentação swagger da API

(http://localhost:3030/docs)

---

### Como usar a API

Instale as Dependências

```bash
npm install
```

Iniciar a API

```bash
nodemon index.js
```

Pronto, agora podemos usar o endpoints

---

### FrameWorks Usados

- cors
- express
- nodemon
- express-graphql
- graphql
- swagger-ui-express
- winston

---

### Funcionamento do Bando de Dados

Formato do arquivo accounts.json

```json
{
  "nextId": 2,
  "accounts": [
    {
      "id": 1,
      "name": "Kenji",
      "balance": 758
    }
  ]
}
```
