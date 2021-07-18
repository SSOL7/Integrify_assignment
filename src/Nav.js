import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
      <nav>
          <ul className="nav-links">
              <Link to="/about">
              <li>about</li>
              </Link>
              <Link to="/shop">
              <li>shop</li>
              </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;