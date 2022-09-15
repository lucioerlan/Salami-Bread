import { Categories } from '../Categories.enum';

describe('Categories enum', () => {
    it('should have a GET_CATEGORIES_ERROR property', () => {
        expect(Categories.GET_CATEGORIES_ERROR).toEqual(
            'Error to get categories',
        );
    });
});
