import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="center">
      <h1 className="big-404">404</h1>
      <p className="muted">This page doesn't exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
};

export default NotFound;
