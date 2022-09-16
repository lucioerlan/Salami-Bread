import { QueryClient } from 'react-query';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
      refetchInterval: 1000 * 60 * 60,
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});
