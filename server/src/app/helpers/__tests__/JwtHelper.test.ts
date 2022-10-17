import JwtHelper from '../Jwt.helper';
import config from '../../../config';

describe('JwtHelper', () => {
    const tokenJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjMyMjAzMDMsImV4cCI6MTY2MzIyMDYwMywic3ViIjoiYWRtaW5AdXNlci5jb20ifQ.4HyLuJq2viO9mk0VaGC22379K7O2MrwV8XxQAwPDJCY'

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
