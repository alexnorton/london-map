import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <ul className="navigation">
      {[
        ['/all-predictions', 'All predictions'],
        ['/vehicle-updates', 'Vehicle updates'],
      ].map(([path, text]) => (
        <li key={path}>
          <NavLink to={path} activeClassName="active">
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
