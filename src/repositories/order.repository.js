import { promises as fs } from 'fs';
const { writeFile, readFile } = fs;

const orderFile = 'pedidos.json';

async function readerOrderFile() {
    try {
        return JSON.parse(await readFile(orderFile));
    } catch (erro) {
        throw new Error(`Erro ao obter pedidos: ${erro.message}`);
    }
}

async function writerOrderFile(data) {
    try {
        await writeFile(orderFile, JSON.stringify(data, null, 4));
    } catch (erro) {
        throw new Error(`Erro ao criar pedido: ${erro.message}`);
    }
}

export default {
    readerOrderFile,
    writerOrderFile,
};
