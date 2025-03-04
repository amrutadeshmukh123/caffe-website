import { useState } from 'react';
import './Header.css'

export default function Header() {


  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };


  return (

  <>
    <div className="header">
      <h2>Dreamland Cafe</h2>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
      </div>

      <div className="links">
        <a href="#" onClick={toggleMenu}>Home</a>
        <a href="#" onClick={toggleMenu}>About us</a>
        <a href="#" onClick={toggleMenu}>Offers</a>
        <a href="#" onClick={toggleMenu}>Services</a>
        <button onClick={toggleMenu}>Know more!</button>
      </div>
    </div>
  </>
  );
}
