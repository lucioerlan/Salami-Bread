import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export default function ValidateBody(obj: ObjectSchema<boolean>) {
    return function validate_(req: Request, res: Response, next: NextFunction) {
        const { error } = obj.validate(req.body);

        if (error) {
            res.send(error);
        } else {
            next();
        }
    };
}
