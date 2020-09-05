import React from "react";

function Footer() {
  return (
    <footer>
      <div className='col v-center'>
        <div className='footer_logo'>
          <span>Photography</span>
        </div>
        <div className='footer_links'>
          <div className='row'>
            <a href='#'>Home</a>
            <a href='#'>Work</a>
            <a href='#'>Contact US</a>
          </div>
        </div>
        <div className='footer_policies'>
          <div className='row'>
            <a href='#'>Copyright</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms</a>
          </div>
        </div>
        <div className='footer_copyright'>
          <span>Copyright © 2020 . All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
