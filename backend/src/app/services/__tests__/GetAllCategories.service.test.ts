import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { GetAllCategoriesService } from '../CategoriesService/GetAllCategories.service';
const getAllCategoriesService = new GetAllCategoriesService();

describe('GetAllCategories Service', () => {
    let connection: Connection;

    beforeAll(async () => {
        connection = await createConnection();
    });

    afterAll(async () => {
        await connection.close();
    });

    it('should be able to list all categories', async () => {
        const categories = await getAllCategoriesService.execute();

        expect(categories).toBeInstanceOf(Array);
        expect(categories[0]).toHaveProperty('id');
        expect(categories[0].id).toBe(1);
    });
});
