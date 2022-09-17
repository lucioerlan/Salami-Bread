import { VisitorTime } from '../..';

describe('VisitorTime', () => {
  it('should return a greeting for the morning', () => {
    const user = 'admin@user.com';

    const greeting = VisitorTime(user);
    expect(greeting).toBe('Bom dia admin 🌅');
    expect(greeting).not.toBe('Boa noite admin 🌙');
  });
});
