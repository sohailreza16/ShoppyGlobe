// importing the necessary hooks and components
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../utils/cartSlice';

function Header() {
// counting total no of items in the cart
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  const dispatch = useDispatch();
// rendering the header component having logo, search box and navigation links
  return (
    <header className="header">
      <NavLink to="/" className="logo">ShoppyGlobe 🖥</NavLink>

      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />

      <nav className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/cart" className="nav-link">🛒 Cart ({cartCount})</NavLink>
      </nav>

    </header>
  );
};

export default Header;
