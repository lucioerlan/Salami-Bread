export default {
    type: process.env.DB_TYPE,
    host: process.env.HOST ?? 'db',
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE,
    logging: process.env.DB_LOGGING
};
