import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

// theme and setTheme come from App as props
const Navbar = ({ theme, setTheme }) => {
  // on phones the menu is hidden until the ☰ button is clicked
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // close the menu after choosing a page
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>HealthTrack</Link>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* the "open" class shows the links on phones */}
      <div className={menuOpen ? "nav-links open" : "nav-links"}>
        {/* NavLink adds the "active" class to the current page */}
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/tracker" onClick={closeMenu}>Tracker</NavLink>
        <NavLink to="/workouts" onClick={closeMenu}>Workouts</NavLink>
        <NavLink to="/features" onClick={closeMenu}>Features</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
