import '../styles/Navbar.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'active' : ''}>Team</NavLink>
        </li>
        <li>
          <NavLink to="/match" className={({ isActive }) => isActive ? 'active' : ''}>Match</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
