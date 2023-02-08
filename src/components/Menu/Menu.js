import React, { useState } from 'react';

import './Menu.css';
export default function Menu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleClickOnMenu() {
    setNavbarOpen(true);
  }
  return (
    <nav className='navBar'>
      <button onClick={handleClickOnMenu}>
        {navbarOpen ? 'Close' : 'Open'}
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
