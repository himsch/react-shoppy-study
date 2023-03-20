import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './componets/Navbar.jsx';
import { AuthContextProvider } from './componets/context/AuthContext.jsx';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
