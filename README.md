# Delivery API

O Delivery API é um sistema projetado para gerenciar os pedidos de um restaurante, oferecendo recursos para gerenciar os pedidos. Além disso, o sistema permite a geração de relatórios detalhados de vendas e do cliente.

## Base de Dados

Este projeto utiliza um arquivo `.json` como banco de dados. Essa abordagem é chamada de `JSON-based database (banco de dados baseado em JSON)` ou `file-based database (banco de dados baseado em arquivo)`, sendo útil para projetos simples ou protótipos.

O campo `status` representa os diferentes status do pedido, sendo utilizado como um filtro para a geração dos relatórios de vendas e do cliente.

O banco de dados é representado como um array de objetos JSON. Cada objeto contém informações sobre os pedidos de um restaurante. Veja abaixo um exemplo do formato utilizado:

```json
{
    "nextId": 3,
    "status": {
        "entregue": ["ENTREGUE"],
        "cancelado": ["CANCELADO"],
        "pendente": ["PENDENTE"],
        "todos": ["ENTREGUE", "CANCELADO", "PENDENTE"]
    },
    "orders": [
        {
            "id": 1,
            "client": "Lavínia Dâmaso",
            "product": "Pizza Muçarela",
            "value": 26,
            "status": "ENTREGUE",
            "timestamp": "2021-05-02T19:48:09.765Z"
        },
        {
            "id": 2,
            "client": "Tália Simas",
            "product": "Pizza Napolitana",
            "value": 28,
            "status": "ENTREGUE",
            "timestamp": "2021-05-02T19:48:09.765Z"
        }
    ]
}
```

## 🚀 Tecnologias Utilizadas

-   **`express`**  
    É um framework para Node.js utilizado para facilitar a criação da API

-   **`winston`**  
    Utilizado para gerenciar e personalizar o log da API

-   **`nodemon`**  
    Utilizado para ajudar no desenvolvimento da API pois reinicia automaticamente a aplicação sempre que detecta uma alteração no código-fonte

-   **`express-graphql`**  
    A biblioteca é um middleware que permite a integração do GraphQL com o Express permitindo a criação da API com GraphQL

-   **`graphql`**
    Utilizado para criar API com o GraphQL oferecendo uma maneira eficiente, flexível e poderosa de consumir APIs

-   **`swagger-ui-express`**
    Utilizado para integrar uma interface gráfica do Swagger com os endpoints documentados facilitando os testes na API

## 🛠️ Como executar o projeto

1. Instale as dependências do projeto

    ```sh
    npm install
    ```

2. Inicie a API

    ```sh
    npm run start
    ```

3. Podemos consultar os endpoints de 3 formas diferentes

    1. Consultar via requisição HTTP padrão http://localhost:3000/<endpoint>

    2. Consultar via GraphQL acessando http://localhost:3000/graphQL

    3. Consultar via documentação swagger acessando http://localhost:3000/swagger

## 🔛 Como consultar os endpoints

### Pedidos do restaurante (Requisição HTTP)

<details>
  <summary>POST /api/v1/order/create - Endpoint responsável por cadastrar um pedido</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**            | **Obrigatório** |
| -------- | ------------- | ------------------------ | --------------- |
| body     | `client`      | Cliente que fez o pedido | Sim             |
| body     | `product`     | Produto pedido           | Sim             |
| body     | `value`       | Valor do pedido          | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                       |
| ---------- | ----------- | ----------------------------------- |
| 201        | Created     | O pedido foi cadastrado com sucesso |
| 400        | Bad Request | Houve um erro ao cadastrar o pedido |

#### **Resposta 201 do endpoint**

```json
{
    "id": 1,
    "client": "Lavínia Dâmaso",
    "product": "Pizza Muçarela",
    "value": 26,
    "status": "ENTREGUE",
    "timestamp": "2021-05-02T19:48:09.765Z"
}
```

</details>

<details>
  <summary>GET /api/v1/order/clientReport - Endpoint responsável por gerar o relatório dos pedidos do cliente</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**                          | **Obrigatório** |
| -------- | ------------- | -------------------------------------- | --------------- |
| query    | `client`      | Cliente utilizado para gerar relatório | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                             |
| ---------- | ----------- | --------------------------------------------------------- |
| 200        | Ok          | O relatório dos pedidos do cliente foi gerado com sucesso |
| 400        | Bad Request | Houve um erro ao gerar o relatório dos pedidos do cliente |

#### **Resposta 200 do endpoint**

```json
{
    "client": "Lavínia Dâmaso",
    "total_vendido": "R$ 113,00",
    "total_cancelado": "R$ 93,50",
    "total_pendente": "R$ 59,00",
    "total": "R$ 265,50",
    "produtos": [
        {
            "produto": "Pizza Napolitana",
            "quantidade": 3,
            "total": "R$ 84,00"
        },
        {
            "produto": "Pizza a Moda",
            "quantidade": 2,
            "total": "R$ 62,00"
        },
        {
            "produto": "Pizza Calabresa",
            "quantidade": 2,
            "total": "R$ 61,00"
        },
        {
            "produto": "Pizza Pepperoni",
            "quantidade": 1,
            "total": "R$ 32,50"
        },
        {
            "produto": "Pizza Muçarela",
            "quantidade": 1,
            "total": "R$ 26,00"
        }
    ]
}
```

</details>

<details>
  <summary>GET /api/v1/order/salesReport - Endpoint responsável por gerar o relatório de vendas do restaurante</summary>

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                                |
| ---------- | ----------- | ------------------------------------------------------------ |
| 200        | Ok          | O relatório das vendas do restaurante foi gerado com sucesso |
| 400        | Bad Request | Houve um erro ao gerar o relatório das vendas do restaurante |

#### **Resposta 200 do endpoint**

```json
{
    "total_vendido": "R$ 4.547,50",
    "total_cancelado": "R$ 5.336,50",
    "total_pendente": "R$ 4.959,00",
    "total": "R$ 14.843,00",
    "produtos": [
        {
            "produto": "Pizza Napolitana",
            "quantidade": 83,
            "total": "R$ 2.324,00"
        },
        {
            "produto": "Pizza a Moda",
            "quantidade": 72,
            "total": "R$ 2.232,00"
        },
        {
            "produto": "Pizza Atum",
            "quantidade": 68,
            "total": "R$ 2.176,00"
        },
        {
            "produto": "Pizza Muçarela",
            "quantidade": 80,
            "total": "R$ 2.080,00"
        },
        {
            "produto": "Pizza Pepperoni",
            "quantidade": 63,
            "total": "R$ 2.047,50"
        },
        {
            "produto": "Pizza Frango com Catupiry",
            "quantidade": 69,
            "total": "R$ 2.001,00"
        },
        {
            "produto": "Pizza Calabresa",
            "quantidade": 65,
            "total": "R$ 1.982,50"
        }
    ]
}
```

</details>

<details>
  <summary>PATCH /api/v1/order/update - Endpoint responsável por atualizar o pedido</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**                                    | **Obrigatório** |
| -------- | ------------- | ------------------------------------------------ | --------------- |
| body     | `id`          | ID do pedido                                     | Sim             |
| body     | `product`     | Produto pedido                                   | Não             |
| body     | `value`       | Valor do pedido                                  | Não             |
| body     | `status`      | Status do pedido [ENTREGUE, CANCELADO, PENDENTE] | Não             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                       |
| ---------- | ----------- | ----------------------------------- |
| 200        | Ok          | O pedido foi atualizado com sucesso |
| 400        | Bad Request | Houve um erro ao atualizar o pedido |

#### **Resposta 200 do endpoint**

```json
{
    "id": 1,
    "client": "Lavínia Dâmaso",
    "product": "Pizza Muçarela",
    "value": 26,
    "status": "ENTREGUE",
    "timestamp": "2021-05-02T19:48:09.765Z"
}
```

</details>

### Pedidos do restaurante (Consulta GraphQL)

<details>
  <summary>createOrder - Consulta responsável por cadastrar um pedido</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**            | **Obrigatório** |
| -------- | ------------- | ------------------------ | --------------- |
| body     | `client`      | Cliente que fez o pedido | Sim             |
| body     | `product`     | Produto pedido           | Sim             |
| body     | `value`       | Valor do pedido          | Sim             |

#### **Consulta GraphQL**

```
mutation {
  createOrder(order: {client: "Lavínia Dâmaso", product: "Pizza Muçarela", value: 26 }) {
    id
    client
    product
    value
    status
    timestamp
  }
}
```

#### **Resposta da Consulta**

```json
{
    "data": {
        "createOrder": {
            "id": 1,
            "client": "Lavínia Dâmaso",
            "product": "Pizza Muçarela",
            "value": 26,
            "status": "PENDENTE",
            "timestamp": "1734210306435"
        }
    }
}
```

</details>

<details>
  <summary>clientReport - Consulta responsável por gerar o relatório dos pedidos do cliente</summary>

#### **Parâmetros da Requisição**

| **Tipo**  | **Parâmetro** | **Descrição**            | **Obrigatório** |
| --------- | ------------- | ------------------------ | --------------- |
| Parâmetro | `client`      | Cliente que fez o pedido | Sim             |

#### **Consulta GraphQL**

```
{
  clientReport(client: "Lavínia Dâmaso") {
    client
    total_vendido
    total_cancelado
    total_pendente
    total
    produtos {
      produto
      quantidade
      total
    }
  }
}
```

#### **Resposta da Consulta**

```json
{
    "data": {
        "clientReport": {
            "client": "Lavínia Dâmaso",
            "total_vendido": "R$ 174,00",
            "total_cancelado": "R$ 93,50",
            "total_pendente": "R$ 59,00",
            "total": "R$ 326,50",
            "produtos": [
                {
                    "produto": "Pizza Muçarela",
                    "quantidade": 1,
                    "total": "R$ 87,00"
                },
                {
                    "produto": "Pizza Napolitana",
                    "quantidade": 3,
                    "total": "R$ 84,00"
                },
                {
                    "produto": "Pizza a Moda",
                    "quantidade": 2,
                    "total": "R$ 62,00"
                },
                {
                    "produto": "Pizza Calabresa",
                    "quantidade": 2,
                    "total": "R$ 61,00"
                },
                {
                    "produto": "Pizza Pepperoni",
                    "quantidade": 1,
                    "total": "R$ 32,50"
                }
            ]
        }
    }
}
```

</details>

<details>
  <summary>salesReport - Consulta responsável por gerar o relatório de vendas do restaurante</summary>

#### **Consulta GraphQL**

```
{
  salesReport {
    total_vendido
    total_cancelado
    total_pendente
    total
    produtos {
      produto
      quantidade
      total
    }
  }
}
```

#### **Resposta da Consulta**

```json
{
    "data": {
        "salesReport": {
            "total_vendido": "R$ 4.608,50",
            "total_cancelado": "R$ 5.336,50",
            "total_pendente": "R$ 4.959,00",
            "total": "R$ 14.904,00",
            "produtos": [
                {
                    "produto": "Pizza Napolitana",
                    "quantidade": 83,
                    "total": "R$ 2.324,00"
                },
                {
                    "produto": "Pizza a Moda",
                    "quantidade": 72,
                    "total": "R$ 2.232,00"
                },
                {
                    "produto": "Pizza Atum",
                    "quantidade": 68,
                    "total": "R$ 2.176,00"
                },
                {
                    "produto": "Pizza Muçarela",
                    "quantidade": 80,
                    "total": "R$ 2.141,00"
                },
                {
                    "produto": "Pizza Pepperoni",
                    "quantidade": 63,
                    "total": "R$ 2.047,50"
                },
                {
                    "produto": "Pizza Frango com Catupiry",
                    "quantidade": 69,
                    "total": "R$ 2.001,00"
                },
                {
                    "produto": "Pizza Calabresa",
                    "quantidade": 65,
                    "total": "R$ 1.982,50"
                }
            ]
        }
    }
}
```

</details>

<details>
  <summary>updateOrder - Consulta responsável por atualizar o pedido</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**            | **Obrigatório** |
| -------- | ------------- | ------------------------ | --------------- |
| body     | `id`          | ID do pedido             | Sim             |
| body     | `client`      | Cliente que fez o pedido | Não             |
| body     | `product`     | Produto pedido           | Não             |
| body     | `value`       | Valor do pedido          | Não             |

#### **Consulta GraphQL**

```
mutation {
  updateOrder(order: {id: 1, product: "Pizza Muçarela", value: 26, status: "Entregue"}) {
    id
    client
    product
    value
    status
    timestamp
  }
}
```

#### **Resposta da Consulta**

```json
{
    "data": {
        "updateOrder": {
            "id": 1,
            "client": "Lavínia Dâmaso",
            "product": "Pizza Muçarela",
            "value": 26,
            "status": "ENTREGUE",
            "timestamp": "2021-05-02T19:48:09.765Z"
        }
    }
}
```

</details>
