import http_status_codes from 'http-status-codes';
import { Request, Response } from 'express';
import { GetAllCategoriesFacades } from '@modules/facades/CategoriesFacades/GetAllCategories.facade';

export class GetAllCategoriesController {
    async handle(request: Request, response: Response) {
        const data = await GetAllCategoriesFacades();

        return response.status(http_status_codes.OK).json(data);
    }
}
