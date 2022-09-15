import { Request, Response } from 'express';
import { SessionController } from '@modules/controllers/SessionController/Session.controller';
import config from '@config/default.json';

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn().mockImplementation(() => 'token'),
    compare: jest.fn().mockImplementation(() => true),
}));

describe('SessionController', () => {
    it('should Status 200', async () => {
        const sessionController = new SessionController();

        const request = {
            body: {
                email: config.login[0].username,
                password: config.login[0].password,
            },
        } as Request;

        const response = {
            status: jest.fn(() => response),
            json: jest.fn(),
        } as unknown as Response;

        await sessionController.handle(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it('should Invalid password', async () => {
        const sessionController = new SessionController();

        const request = {
            body: {
                email: config.login[0].username,
                password: 'invalid',
            },
        } as Request;

        const response = {
            status: jest.fn(() => response),
            json: jest.fn(),
        } as unknown as Response;

        await sessionController.handle(request, response);

        expect(response.json).toHaveBeenCalledWith({
            message: 'Invalid password',
            statusCode: 401,
        });
    });
});
