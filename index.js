import express from "express";
import pedidos from "./routes/pedidos.js";
import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());

app.use("/", pedidos);

app.listen(3000, async () => {
  try {
    await readFile("pedidos.json");
    console.log("Arquivo Achado");
  } catch (error) {
    const listaPedidos = {
      nextId: 1,
      pedidos: [],
    };
    writeFile("pedidos.json", JSON.stringify(listaPedidos))
      .then(() => {
        console.log("Arquivo pedidos criados");
      })
      .catch((error) => {
        console.log("Arquivo não criado, erro:", error);
      });
  }
  console.log("API Started!");
});
