import { Categories } from './src/infra/entities';

export default {
    type: process.env.DB_TYPE,
    host: process.env.HOST ?? 'localhost',
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE,
    logging: process.env.DB_LOGGING,
    insecureAuth: true,
    entities: [Categories],
    migrations: ['./src/infra/migrations/*.ts'],
    seeds: ['src/infra/seeding/seeds/**/*{.ts,.js}'],
    factories: ['src/infra/seeding/factories/**/*{.ts,.js}'],
    cli: {
        migrationsDir: './src/infra/migrations',
        entitiesDir: './src/infra/entities',
    },
};
