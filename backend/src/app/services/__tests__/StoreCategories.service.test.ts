import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { StoreCategoriesService } from '../CategoriesService/StoreCategories.service';
const storeCategoriesService = new StoreCategoriesService();

describe('StoreCategories Service', () => {
    let connection: Connection;

    beforeAll(async () => {
        connection = await createConnection();
    });

    afterAll(async () => {
        await connection.close();
    });

    it('should be able create a new category', async () => {
        const category = await storeCategoriesService.execute({
            name: 'Category Test',
        });

        expect(category).toHaveProperty('id');
        expect(category).toHaveProperty('name');

        expect(category.name).toBe('Category Test');
    });
});
