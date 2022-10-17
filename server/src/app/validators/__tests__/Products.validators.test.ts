import { CategoriesSchema } from '../CategoriesValidators/Categories.validators';

describe('CategoriesSchema', () => {
    let mockActivity: {
        name: string;
    };

    it('should be defined', () => {
        expect(CategoriesSchema).toBeDefined();
    });

    it('should validate', () => {
        const { error } = CategoriesSchema.validate(mockActivity);

        expect(error).toBeUndefined();
    });

    it('should not validate', () => {
        const { error } = CategoriesSchema.validate({});

        expect(error).toBeDefined();
    });
});
