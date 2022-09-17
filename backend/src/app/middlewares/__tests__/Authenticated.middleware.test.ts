import { NextFunction, Request, Response } from 'express';
import EnsuredAuthenticated from 'src/app/middlewares/Authenticated.middleware';

describe('EnsuredAuthenticated middleware', () => {
    const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
    } as unknown as Response;

    const next = jest.fn() as NextFunction;

    it('should return a 401 status code when token is missing', () => {
        const request = {
            headers: {},
        } as Request;

        EnsuredAuthenticated(request, response, next);

        expect(response.status).toHaveBeenCalledWith(401);
    });
});
