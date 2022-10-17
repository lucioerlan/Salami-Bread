import { CATEGORIES } from '../Categories.constants';

describe('Categories constants', () => {
    it('should have a GET_CATEGORIES_ERROR property', () => {
        expect(CATEGORIES.GET_CATEGORIES_ERROR).toEqual(
            'Error to get categories',
        );
    });
});
