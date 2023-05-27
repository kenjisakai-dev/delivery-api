# Delivery-api

## Crud Delivery API manipula os pedidos delivery

### Funcionalidades

Criar pedido<br>
POST (http://localhost:3005/pedido)

```json
{
  "cliente": "Kenji Sakai",
  "produto": "Pizza de 4 Queijo",
  "valor": 78.65
}
```

Atualizar pedido<br>
PUT (http://localhost:3005/pedido)

```json
{
  "id": 1
  "cliente": "Kenji Sakai",
  "produto": "Pizza de 4 Queijo",
  "valor": 80.85,
  "entregue": false
}
```

Atualizar o status de entrega do pedido<br>
PATCH (http://localhost:3005/pedido/entregue)

```json
{
  "id": 1
  "entregue": true
}
```

Cancelar pedido<br>
DELETE (http://localhost:3005/pedido/{id})

Consultar pedido<br>
GET (http://localhost:3005/pedido/{id})

Consultar o valor total de pedidos entregues de um cliente<br>
GET (http://localhost:3005/pedido?cliente={Kenji Sakai})

Consultar o valor total de pedidos entregues de um produto<br>
GET (http://localhost:3005/pedido?produto={Pizza de 4 Queijo})

Consultar os produtos mais pedidos<br>
GET (http://localhost:3005/pedido/produtos/mais/vendidos)

### Também podemos usar o GraphQL (http://localhost:3005/graphql)
Criar pedido<br>

```bash
mutation {
  createPedido(pedido: {
    cliente: "Kenji Sakai"
    produto: "Pizza de 4 Queijo"
    valor: 78.65
  }) {
    id
    cliente
    produto
    valor
    entregue
    timestamp
  }
}
```

Atualizar pedido<br>

```bash
mutation {
  updatePedido(pedido: {
    id: 1,
    cliente: "Kenji Sakai"
    produto: "Pizza de 4 Queijo"
    valor: 80.85
    entregue: false
  }) {
    id
    cliente
    produto
    valor
    entregue
    timestamp
  }
}
```

Atualizar o status de entrega do pedido<br>

```bash
mutation {
  updateEntregue(pedido: {
    id: 565,
    entregue: true
  }) {
    id
    cliente
    produto
    valor
    entregue
    timestamp
  }
}
```

Cancelar pedido<br>

```bash
mutation {
  deletePedido(id: 2)
}
```

Consultar pedido<br>

```bash
{
  getPedido(id: 1) {
    id
    cliente
    produto
    valor
    entregue
    timestamp
  }
}
```

Consultar o valor total de pedidos entregues de um cliente<br>

```bash
{
  getConsultaValorTotal(cliente: "Kenji Sakai")
}
```

Consultar o valor total de pedidos entregues de um produto<br>

```bash
{
  getConsultaValorTotal(produto: "Pizza Frango com Catupiry")
}
```

Consultar os produtos mais pedidos<br>

```bash
{
  getProdutosMaisVendidos
}
```

---

### Como usar a API

Instale as Dependências

```bash
npm install
```

Iniciar a API

```bash
npm run dev
```

Pronto, agora podemos usar a API

---

### Documentação swagger da API

(http://localhost:3005/swagger)

---

### FrameWorks Usados
- express
- nodemon
- winston
- cors
- swagger-ui-express
- graphql
- express-graphql

---

### Funcionamento do Bando de Dados

Formato do arquivo accounts.json

```json
{
  "nextId": 2,
  "pedidos": [
    {
      "id": 1,
      "cliente": "Kenji Sakai",
      "produto": "Pizza de 4 Queijo",
      "valor": 80.85,
      "entregue": true,
      "timestamp": "26/05/2023, 22:25:10"
    },
  ],
}
```
