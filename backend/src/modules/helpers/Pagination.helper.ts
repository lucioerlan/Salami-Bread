import http_status_codes from 'http-status-codes';
import { AppError } from '@modules/errors/AppError';

class PaginationHelper {
    _limit(page: string, limit: number, data: Array<[]>) {
        try {
            const pageInt = parseInt(page);
            const limitInt = limit;

            const result = {
                page: pageInt,
                limit: limitInt,
            };

            return {
                data: data.slice(
                    (pageInt - 1) * limitInt,
                    pageInt * limitInt,
                ),
                meta: result,
            };
        } catch (error) {
            return new AppError(
                'Pagination error',
                http_status_codes.NO_CONTENT,
            );
        }
    }
}

export default new PaginationHelper();
