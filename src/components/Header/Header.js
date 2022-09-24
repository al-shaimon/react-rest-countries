import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="head">
      <h1>Welcome to my rest Countries</h1>
      <nav>
        <a href="/home">Home</a>
        <a href="/countries">Countries</a>
        <a href="/about">About</a>
      </nav>
    </div>
  );
};

export default Header;
