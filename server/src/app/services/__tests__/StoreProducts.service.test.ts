import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { StoreProductsService } from '../ProductsService/StoreProducts.service';
const storeProductsService = new StoreProductsService();

describe('StoreProducts Service', () => {
    let connection: Connection;

    beforeAll(async () => {
        connection = await createConnection();
    });

    afterAll(async () => {
        await connection.close();
    });

    it('should be able create a new product', async () => {
        const product = await storeProductsService.execute({
            name: 'Product Test',
            category_id: 1,
        });

        expect(product).toHaveProperty('category_id');
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name');

        expect(product.name).toBe('Product Test');
    });
});
