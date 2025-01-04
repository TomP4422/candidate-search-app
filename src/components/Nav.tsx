import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f5f5f5' }}>
      <Link to="/">Home</Link>
      <Link to="/candidate-search">Candidate Search</Link>
    </nav>
  );
};

export default Nav;
