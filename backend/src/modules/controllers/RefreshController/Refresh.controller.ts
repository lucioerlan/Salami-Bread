import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { RefreshFacades } from '@modules/facades/RefreshFacades/Refresh.facade';

export class RefreshController {
    async handle(request: Request, response: Response) {
        const { access_token } = request.body;
        const data = await RefreshFacades({ access_token });

        return response.status(http_status_codes.OK).json(data);
    }
}
