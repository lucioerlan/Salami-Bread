import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { GetAllProductsService } from '../ProductsService/GetAllProducts.service';
const getAllProductsService = new GetAllProductsService();

describe('GetAllProducts Service', () => {
    let connection: Connection;

    beforeAll(async () => {
        connection = await createConnection();
    });

    afterAll(async () => {
        await connection.close();
    });

    it('should be able to paginate products', async () => {
        const product = await getAllProductsService.execute({
            page: '1',
        });

        expect(product).toHaveProperty('data');
        expect(product).toHaveProperty('meta');
    });

    it('should return empty data for pagination', async () => {
        const product = await getAllProductsService.execute({
            page: '1000',
        });

        expect(product).toHaveProperty('data');
        expect(product).toEqual({ data: [], meta: { limit: 15, page: 1000 } });
    });
});
