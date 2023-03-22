import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './componets/Navbar.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
