import { Request, Response } from 'express';
import { SessionController } from '../../controllers/SessionController/Session.controller';
import config from '../../../config';

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(() => 'token'),
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

    it('should Status 400', async () => {
        const sessionController = new SessionController();

        const request = {
            body: {
                email: 'invalid',
                password: 'invalid',
            },
        } as Request;

        const response = {
            status: jest.fn(() => response),
            json: jest.fn(),
        } as unknown as Response;

        await sessionController.handle(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });
});
