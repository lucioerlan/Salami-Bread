import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { SessionFacades } from '@modules/facades/SessionFacades/Session.facade';

export class SessionController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;
        const data = await SessionFacades({ email, password });

        return response.status(http_status_codes.OK).json(data);
    }
}
