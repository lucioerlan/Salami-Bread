import { SessionSchema } from '../SessionValidators/Session.validators';

describe('SessionSchema', () => {
    let mockActivity: {
        email: string;
        password: string;
    };

    it('should be defined', () => {
        expect(SessionSchema).toBeDefined();
    });

    it('should validate', () => {
        const { error } = SessionSchema.validate(mockActivity);

        expect(error).toBeUndefined();
    });

    it('should not validate', () => {
        const { error } = SessionSchema.validate({});

        expect(error).toBeDefined();
    });
});
