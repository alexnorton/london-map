import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <NavLink to="/all-predictions" activeClassName="active">
          All predictions
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
