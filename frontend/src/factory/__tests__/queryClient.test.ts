import { QueryClient } from 'react-query';
import { queryClient } from 'src/factory/queryClient';

describe('persistQqueryClientueryClient', () => {
  it('should return a QueryClient', () => {
    expect(queryClient).toBeInstanceOf(QueryClient);
  });
});
