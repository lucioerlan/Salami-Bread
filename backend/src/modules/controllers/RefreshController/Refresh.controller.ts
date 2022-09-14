import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { RefreshFacades } from '@modules/facades/RefreshFacades/Refresh.facade';

export class RefreshController {
    async handle(request: Request, response: Response) {
        const { token } = request.body;
        const data = await RefreshFacades({ token });

        if (data instanceof Error) {
            return response.status(http_status_codes.BAD_REQUEST).json(data.message);
        }

        return response.status(http_status_codes.OK).json(data);
    }
}
