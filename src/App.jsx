import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './componets/Navbar.jsx';
import { AuthContextProvider } from './componets/context/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
