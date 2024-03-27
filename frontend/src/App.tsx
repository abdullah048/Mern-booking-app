import axiosInterceptors from '@hooks/axiosInterceptors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import { routes } from './routes/routes';
import { useEffect, useState } from 'react';
import { Flex, Spin } from 'antd';

function App() {
  axiosInterceptors();

  // Create a client
  const queryClient = new QueryClient();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeEnd = () => {
      setLoading(false);
    };

    // Listen for route changes
    window.addEventListener('beforeunload', handleRouteChangeStart);
    window.addEventListener('load', handleRouteChangeEnd);

    return () => {
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      window.removeEventListener('load', handleRouteChangeEnd);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router>
        {loading && (
          <Flex
            align='center'
            justify='center'
            style={{
              height: '100vh',
              width: '100%',
            }}>
            <Spin size='large' />
          </Flex>
        )}
        <Routes>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} Component={component} />
          ))}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
