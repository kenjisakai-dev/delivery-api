import express from 'express';
import winston from 'winston';
import { graphqlHTTP } from 'express-graphql';
import Schema from './schema/index.js';
import PedidoRoute from './routes/pedido.route.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './doc/doc.js';

const port = 3005;
const app = express();
app.use(express.json());

app.use('/pedido', PedidoRoute);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

const { printf, combine, timestamp, label } = winston.format;

const myFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'log/delivery-api.log' }),
  ],
  format: combine(
    label({ label: 'Delivery-API' }),
    timestamp({ format: 'DD/MM/YYYY HH:mm' }),
    myFormat
  ),
});

app.listen(port, () => {
  global.logger.info('API Started!');
});
