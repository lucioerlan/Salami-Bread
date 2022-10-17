import { ProductsSchema } from '../ProductsValidators/Products.validators';

describe('ProductsSchema', () => {
    let mockActivity: {
        name: string;
        category_id: number;
    };

    it('should be defined', () => {
        expect(ProductsSchema).toBeDefined();
    });

    it('should validate', () => {
        const { error } = ProductsSchema.validate(mockActivity);

        expect(error).toBeUndefined();
    });

    it('should not validate', () => {
        const { error } = ProductsSchema.validate({});

        expect(error).toBeDefined();
    });
});
