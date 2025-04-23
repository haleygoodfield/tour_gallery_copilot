console.log("Rendering App");

import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://www.course-api.com/react-tours-project'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2 style={styles.loading}>Loading...</h2>;
  }

  if (error) {
    return <h2 style={styles.error}>Error: {error}</h2>;
  }

  if (tours.length === 0) {
    return (
      <div style={styles.noTours}>
        <h2>No tours left</h2>
        <button onClick={fetchTours} style={styles.refreshButton}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 style={styles.header}>Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '2rem',
    color: '#333',
  },
  loading: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '1.5rem',
    color: '#007bff',
  },
  error: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '1.5rem',
    color: '#e63946',
  },
  noTours: {
    textAlign: 'center',
    marginTop: '20px',
  },
  refreshButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
