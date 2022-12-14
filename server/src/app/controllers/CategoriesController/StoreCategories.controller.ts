import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { StoreCategoriesFacades } from 'src/app/facades/CategoriesFacades/StoreCategories.facade';

export class StoreCategoriesController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const data = await StoreCategoriesFacades({ name });

        if (data instanceof Error) {
            return response
                .status(http_status_codes.NOT_MODIFIED)
                .json(data.message);
        }

        return response.status(http_status_codes.OK).json(data);
    }
}
