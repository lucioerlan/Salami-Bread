import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Products } from '../../../app/entities';

export default class InitialDatabaseSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await factory(Products)().createMany(150);
    }
}
