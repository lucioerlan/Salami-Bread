import http_status_codes from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { Token } from 'src/app/enums/Token.enum';

export default function EnsuredAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
        return response
            .status(http_status_codes.UNAUTHORIZED)
            .json({ error: Token.TOKEN_MISSING });
    }

    const [, token] = authHeaders.split(' ');

    try {
        verify(token, process.env.SECRET_JWT as string);

        return next();
    } catch (err) {
        return response
            .status(http_status_codes.UNAUTHORIZED)
            .json({ error: Token.TOKEN_MALFORMED });
    }
}
