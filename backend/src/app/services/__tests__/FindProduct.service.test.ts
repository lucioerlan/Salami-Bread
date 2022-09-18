import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { FindProductService } from '../ProductsService/FindProduct.service';
const findProductService = new FindProductService();

describe('FindProduct Service', () => {
    let connection: Connection;

    beforeAll(async () => {
        connection = await createConnection();
    });

    afterAll(async () => {
        await connection.close();
    });

    it('should be able to find a product', async () => {
        const product = await findProductService.execute({
            id: '1',
        });

        expect(product).toHaveProperty('category_id');
        expect(product).toHaveProperty('category_name');
        expect(product).toHaveProperty('product_id');
        expect(product).toHaveProperty('product_name');
    });

    it('should be able error when product not found', async () => {
        const product = await findProductService.execute({
            id: '100',
        });

        expect(product).toBeInstanceOf(Error);
        expect(product instanceof Error && product.message).toBe(
            'Product not found',
        );
    });
});
