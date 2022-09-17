import http_status_codes from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export default function ValidateBody(obj: ObjectSchema<boolean>) {
    return function validate_(
        request: Request,
        response: Response,
        next: NextFunction,
    ) {
        const { error } = obj.validate(request.body);

        if (error) {
            return response
                .status(http_status_codes.BAD_REQUEST)
                .json(error);
        } else {
            next();
        }
    };
}
