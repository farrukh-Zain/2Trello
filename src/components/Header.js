// Header.js
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
        <img src="https://trello.com/assets/75d96a8b741cb5310663.png" alt=""/>
          <div className='tri'>Trello</div>
        </div>
        <ul className="nav-links">
          <li><a href="#">Workspaces</a></li>
          <li><a href="#">Starred</a></li>
          <li><a href="#">Templates</a></li>
        
        </ul>
        
        <button className="cta-button">Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;
