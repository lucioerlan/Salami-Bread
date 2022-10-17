import { createConnection, Connection } from 'typeorm';
import {
    token,
    createAuth,
    refreshToken,
    createCategory,
    createProduct,
} from '../fixtures/payload';
import App from '../../src/app';
import request from 'supertest';

describe('App', () => {
    let connection: Connection;
    const app = new App();

    beforeAll(async () => {
        connection = await createConnection();
        app.build();
        app.start();
    });

    afterAll(async () => {
        await connection.close();
    });

    it('shoud be able to authenticate the user', async () => {
        const response = await request(app.app)
            .post('/api/v1/users/auth')
            .send(createAuth);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('shoud be able to refresh the token', async () => {
        const response = await request(app.app)
            .post('/api/v1/users/auth/refresh')
            .send(refreshToken);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('shoud be able to create a category', async () => {
        const response = await request(app.app)
            .post('/api/v1/categories/create')
            .send(createCategory)
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body.name).toBe(createCategory.name);
    });

    it('shoud be able to create a product', async () => {
        const response = await request(app.app)
            .post('/api/v1/products/create')
            .send(createProduct)
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body.name).toBe(createProduct.name);
    });
});
