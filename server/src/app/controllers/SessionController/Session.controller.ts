import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { SessionFacades } from 'src/app/facades/SessionFacades/Session.facade';

export class SessionController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;
        const data = await SessionFacades({ email, password });

        if (data instanceof Error) {
            return response
                .status(http_status_codes.BAD_REQUEST)
                .json(data.message);
        }

        return response.status(http_status_codes.OK).json(data);
    }
}
