import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPenFill } from 'react-icons/all.js';

function Navbar(props) {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/Carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPenFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Navbar;
