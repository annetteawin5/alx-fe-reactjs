import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostComponents';

  const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    );
  }