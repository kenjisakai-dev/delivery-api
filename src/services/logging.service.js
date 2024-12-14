import winston from 'winston';

const { printf, combine, timestamp, label } = winston.format;

const myFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/delivery-api.log' }),
    ],
    format: combine(
        label({ label: 'Delivery-API' }),
        timestamp({ format: 'DD/MM/YYYY HH:mm' }),
        myFormat,
    ),
});

export default logger;
