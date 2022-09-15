import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { GetAllProductsFacades } from '@modules/facades/ProductsFacades/GetAllProducts.facade';

export class GetAllProductsController {
    async handle(request: Request, response: Response) {
        const { page } = request.query as { page: string };
        const data = await GetAllProductsFacades({ page });

        return response.status(http_status_codes.OK).json(data);
    }
}
