import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3 className="footer-logo">HealthTrack</h3>
          <p>Log your meals, workouts and daily activities in one place.</p>
        </div>

        <div className="footer-links">
          <Link to="/tracker">Tracker</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <p className="copyright">© 2026 HealthTrack · CSCI426 Project · LIU</p>
    </footer>
  );
};

export default Footer;
