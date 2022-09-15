import http_status_codes from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export default function ValidateBody(obj: ObjectSchema<boolean>) {
    return function validate_(req: Request, res: Response, next: NextFunction) {
        const { error } = obj.validate(req.body);

        if (error) {
            return res.status(http_status_codes.BAD_REQUEST).json(error);
        } else {
            next();
        }
    };
}
