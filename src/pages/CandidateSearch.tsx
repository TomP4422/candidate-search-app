import { useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = query.trim()
        ? await searchGithubUser(query).then((user) => (user ? [user] : []))
        : await searchGithub();
      setResults(data);
    } catch (err) {
      setError('Failed to fetch results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Candidate Search</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
          style={{ padding: '0.5rem', marginRight: '0.5rem', width: 'calc(100% - 6rem)' }}
        />
        <button onClick={handleSearch} disabled={loading} style={{ padding: '0.5rem' }}>
          {loading ? '...' : 'Search'}
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {results.length === 0 && !loading && !error && <p>No candidates found.</p>}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {results.map((candidate) => (
          <li
            key={candidate.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              padding: '0.5rem',
              borderRadius: '8px',
            }}
          >
            <img
              src={candidate.avatar_url}
              alt={candidate.login}
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '1rem' }}
            />
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              {candidate.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;
