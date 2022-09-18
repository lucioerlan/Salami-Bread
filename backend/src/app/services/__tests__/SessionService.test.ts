import { SessionService } from '../SessionService/Session.service';
const sessionService = new SessionService();
import config from '../../../config';

describe('Session Service', () => {
    it('should be able to create a new session', async () => {
        const session = await sessionService.execute({
            email: config.login[0].username,
            password: config.login[0].password,
        });

        expect(session).toHaveProperty('token');
        expect(session).toHaveProperty('email');
        expect(session).toHaveProperty('iat');
        expect(session).toHaveProperty('exp');
    });

    it('should not be able to create a new session with invalid password', async () => {
        const session = await sessionService.execute({
            email: config.login[0].username,
            password: '0000001',
        });

        expect(session).toBeInstanceOf(Error);
        expect(session instanceof Error && session.message).toBe(
            'Invalid password',
        );
    });
});
