# Delivery-api

## Crud Delivery API manipula os pedidos de delivery de um restaurante

### Funcionalidades

Criar pedido<br>
POST (http://localhost:3005/pedido)

```json
{
  "cliente": "Kenji",
  "produto": "Pizza de Queijo",
  "valor": 63
}
```

Atualizar pedido<br>
POST (http://localhost:3005/pedido)

```json
{
  "id": 1
  "cliente": "Kenji",
  "produto": "Pizza Calabresa",
  "valor": 65,
  "entregue": false
}
```

Atualizar o status de entrega do pedido<br>
POST (http://localhost:3005/pedido/entregue)

```json
{
  "id": 53
  "entregue": true
}
```
Cancelar pedido<br>
DELETE (http://localhost:3005/pedido/{id})

Consultar pedido<br>
GET (http://localhost:3005/pedido/{id})

Consultar o valor total de pedidos entregues de um cliente<br>
GET (http://localhost:3005/pedido?cliente=Kenji Sakai)

Consultar o valor total de pedidos entregues de um produto<br>
GET (http://localhost:3005/pedido?produto=Pizza Calabresa)

Consultar os produtos mais pedidos<br>
GET (http://localhost:3005/pedido/produtos/mais/vendidos)


---

### Documentação swagger da API

(http://localhost:3005/docs)

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
  "pedidos": [
    {
      "id": 1,
      "cliente": "Kenji",
      "produto": "Pizza Calabresa",
      "valor": 65,
      "entregue": true,
      "timestamp": "02/05/2021, 19:48:09"
    },
  ],
}
```
