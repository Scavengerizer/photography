import React from "react";

function Header() {
  return (
    <header>
      <div className='header_contents col center'>
        <div className='logo'>
          <span>Photography</span>
        </div>
        <div className='nav-links row'>
          <a href='#' className='link'>
            Home
          </a>
          <a href='#' className='link'>
            Work
          </a>
          <a href='#' className='link'>
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
