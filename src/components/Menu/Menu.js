import React, { useState } from 'react';

import './Menu.css';
export default function Menu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='navBar'>
      <button>{navbarOpen ? 'Close' : 'Open'}</button>
      <ul></ul>
    </nav>
  );
}
