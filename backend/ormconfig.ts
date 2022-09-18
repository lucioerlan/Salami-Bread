import { Categories, Products } from './src/app/entities';

export default {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST || 'db',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: "all",
    insecureAuth: true,
    entities: [Categories, Products],
    migrations: ["src/app/database/migrations/*.ts"],
    seeds: ['src/app/database/seeding/seeds/**/*{.ts,.js}'],
    factories: ['src/app/database/seeding/factories/**/*{.ts,.js}'],
    cli: {
        migrationsDir: './src/app/database/migrations',
        entitiesDir: './src/app/entities',
    },
};
