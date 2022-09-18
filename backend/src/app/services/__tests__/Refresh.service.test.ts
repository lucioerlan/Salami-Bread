import { sign } from 'jsonwebtoken';
import config from '../../../config';

import { RefreshService } from '../RefreshService/Refresh.service';
const refreshService = new RefreshService();

describe('Refresh Service', () => {
    const token = sign({}, 'secret', {
        subject: config.login[0].username,
        expiresIn: 300,
    });

    it('should be able to refresh token', () => {
        const refreshToken = {
            access_token: token,
        };

        const refresh = refreshService.execute(refreshToken);

        expect(refresh).toHaveProperty('token');
        expect(refresh).toHaveProperty('email');
        expect(refresh).toHaveProperty('iat');
        expect(refresh).toHaveProperty('exp');
    });

    it('should not be able to refresh token with invalid token', () => {
        const refreshToken = {
            access_token: 'invalid_token',
        };

        const refresh = refreshService.execute(refreshToken);
        expect(JSON.stringify(refresh)).toContain('Error to generate token');
    });
});
