import { AppError } from '../AppError';

describe('AppError', () => {
    it('should create an error', () => {
        const error = new AppError('Error', 400);

        expect(error).toHaveProperty('message');
        expect(error).toHaveProperty('statusCode');
    });

    it('should create an error with default status code', () => {
        const error = new AppError('Error');

        expect(error).toHaveProperty('message');
        expect(error).toHaveProperty('statusCode');
    });
})
