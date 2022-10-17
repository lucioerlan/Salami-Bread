import '@testing-library/jest-dom';

import * as common from '../categories';

describe('categories service', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have called the getAllCategories method', () => {
        const spy = jest.spyOn(common, 'getAllCategories');

        common.getAllCategories();

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('should have called the storeCategories method', () => {
        const spy = jest.spyOn(common, 'storeCategories');

        common.storeCategories('test');

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});
