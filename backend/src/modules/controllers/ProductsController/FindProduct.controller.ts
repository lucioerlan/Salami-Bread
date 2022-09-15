import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { FindProductFacades } from '@modules/facades/ProductsFacades/FindProduct.facade';

export class FindProductController {
    async handle(request: Request, response: Response) {
        const { id } = request.params as { id: string };
        const data = await FindProductFacades({ id });

        return response.status(http_status_codes.OK).json(data);
    }
}
