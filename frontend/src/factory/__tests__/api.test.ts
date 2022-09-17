import '@testing-library/jest-dom';
import api from 'src/app/factory/api';

describe('ApiFactory', () => {
  jest.mock('axios', () => ({
    create: () => ({
      interceptors: {
        request: { eject: jest.fn(), use: jest.fn() },
        response: { eject: jest.fn(), use: jest.fn() },
      },
    }),
  }));

  it('should api be defined', () => {
    const apiInstance = api;
    expect(apiInstance).toBeDefined();
  });
});
