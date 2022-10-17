import '@testing-library/jest-dom';

import * as common from '../products';

describe('products service', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have called the getAllProducts method', () => {
        const spy = jest.spyOn(common, 'getAllProducts');

        common.getAllProducts(1);

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('should have called the getIdProducs method', () => {
        const spy = jest.spyOn(common, 'getIdProducs');

        common.getIdProducs(1);

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('should have called the storeProduct method', () => {
        const spy = jest.spyOn(common, 'storeProduct');

        common.storeProduct('test', 1);

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});
