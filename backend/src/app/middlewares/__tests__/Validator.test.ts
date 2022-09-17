import ValidateBody from '../Validator.middleware';
import { ObjectSchema } from 'joi';
import { Request, Response } from 'express';

describe('Validator', () => {
    it('should validate body', () => {
        const obj = {
            validate: jest.fn().mockReturnValue({ error: null })
        } as unknown as ObjectSchema<boolean>;

        const req = {} as Request;
        const res = {} as Response;
        const next = jest.fn();

        ValidateBody(obj)(req, res, next);

        expect(obj.validate).toBeCalledWith(req.body);
        expect(next).toBeCalled();
    });
});
