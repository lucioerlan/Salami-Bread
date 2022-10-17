import { TOKEN } from '../Token.constants';

describe('Token constants', () => {
    it('should have a INVALID_TOKEN property', () => {
        expect(TOKEN.INVALID_TOKEN).toEqual('Invalid token');
    });

    it('should have a TOKEN_EXPIRED property', () => {
        expect(TOKEN.TOKEN_EXPIRED).toEqual('Token expired');
    });

    it('should have a TOKEN_NOT_PROVIDED property', () => {
        expect(TOKEN.TOKEN_NOT_PROVIDED).toEqual('Token not provided');
    });

    it('should have a TOKEN_NOT_GENERATED property', () => {
        expect(TOKEN.TOKEN_NOT_GENERATED).toEqual('Token not generated');
    });

    it('should have a ERROR_TO_GENERATE_TOKEN property', () => {
        expect(TOKEN.ERROR_TO_GENERATE_TOKEN).toEqual(
            'Error to generate token',
        );
    });

    it('should have a INVALID_PASSWORD property', () => {
        expect(TOKEN.INVALID_PASSWORD).toEqual('Invalid password');
    });

    it('should have a ERROR_TO_COMPARE_PASSWORD property', () => {
        expect(TOKEN.ERROR_TO_COMPARE_PASSWORD).toEqual(
            'Error to compare password',
        );
    });

    it('should have a USER_NOT_FOUND property', () => {
        expect(TOKEN.USER_NOT_FOUND).toEqual('User not found');
    });

    it('should have a ERROR_TO_FIND_USER property', () => {
        expect(TOKEN.ERROR_TO_FIND_USER).toEqual('Error to find user');
    });
});
