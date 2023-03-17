import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPenFill } from 'react-icons/all.js';

function Navbar(props) {
  return (
    <header>
      <Link to="/">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/Carts">Carts</Link>
        <Link to="/products/new">
          <BsFillPenFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Navbar;
