import JwtHelper from '../Jwt.helper';
import config from 'src/config';
import { mockTokenJwt } from './Mock';

describe('JwtHelper', () => {
    const tokenJwt = mockTokenJwt;

    it('should decode a token', () => {
        const decoded = JwtHelper._decode(tokenJwt);

        expect(decoded).toHaveProperty('iat');
        expect(decoded).toHaveProperty('exp');
        expect(decoded).toHaveProperty('sub');
    });

    it('should find user by email', () => {
        const user = JwtHelper._findUser(config.login[0].username);

        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('password');
        expect(user).toHaveProperty('token');
    });
});
