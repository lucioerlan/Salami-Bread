import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { GetAllProductsFacades } from 'src/app/facades/ProductsFacades/GetAllProducts.facade';

export class GetAllProductsController {
    async handle(request: Request, response: Response) {
        const { page } = request.query as { page: string };
        const data = await GetAllProductsFacades({ page });

        if (data instanceof Error) {
            return response
                .status(http_status_codes.NOT_FOUND)
                .json(data.message);
        }

        return response.status(http_status_codes.OK).json(data);
    }
}
