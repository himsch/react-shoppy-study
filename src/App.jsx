import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './componets/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
