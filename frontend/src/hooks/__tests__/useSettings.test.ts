import '@testing-library/jest-dom';
import * as useSettings from 'src/hooks/useSettings';

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      settings: {
        token: '',
        isLoggedIn: '',
      }
    })
  };
});

describe('useSettings hook', () => {
  it('should have called the useSettings method', () => {
    const mockMethod = jest.spyOn(useSettings, 'default');
    useSettings.default();

    expect(mockMethod.mock.calls.length).toBe(1);
    expect(mockMethod).toHaveBeenCalledTimes(1);
  });
});
