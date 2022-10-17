import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { StoreProductsFacades } from 'src/app/facades/ProductsFacades/StoreProducts.facade';

export class StoreProductsController {
    async handle(request: Request, response: Response) {
        const { name, category_id } = request.body;
        const data = await StoreProductsFacades({ name, category_id });

        if (data instanceof Error) {
            return response
                .status(http_status_codes.NOT_MODIFIED)
                .json(data.message);
        }

        return response.status(http_status_codes.OK).json(data);
    }
}
