import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

const App = () => {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to manage the loading status
  const [loading, setLoading] = useState(true);
  // State to handle errors during data fetching
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        'https://www.course-api.com/react-tours-project'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw an error if the response is not OK
      }
      const data = await response.json();
      setTours(data); // Update the tours state with fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Set the error message if fetching fails
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  // useEffect to fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Filter out the tour with the given ID
  };

  // Conditional rendering for loading state
  if (loading) {
    return <h2 style={styles.loading}>Loading...</h2>;
  }

  // Conditional rendering for error state
  if (error) {
    return <h2 style={styles.error}>Error: {error}</h2>;
  }

  // Conditional rendering for when no tours are left
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

  // Render the Gallery component with the tours and removeTour function
  return (
    <div>
      <h1 style={styles.header}>Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
};

// Inline styles for the App component
const styles = {
  header: {
    textAlign: 'center', // Center the header text
    margin: '20px 0', // Add vertical spacing above and below the header
    fontSize: '2rem', // Set a large font size for the header
    color: '#333', // Use a dark gray color for the text
  },
  loading: {
    textAlign: 'center', // Center the loading message
    marginTop: '20px', // Add spacing above the loading message
    fontSize: '1.5rem', // Set a medium font size for the loading message
    color: '#007bff', // Use a blue color for the loading text
  },
  error: {
    textAlign: 'center', // Center the error message
    marginTop: '20px', // Add spacing above the error message
    fontSize: '1.5rem', // Set a medium font size for the error message
    color: '#e63946', // Use a red color for the error text
  },
  noTours: {
    textAlign: 'center', // Center the "No tours left" message
    marginTop: '20px', // Add spacing above the message
  },
  refreshButton: {
    padding: '10px 20px', // Add padding inside the button
    fontSize: '16px', // Set a medium font size for the button text
    backgroundColor: '#007bff', // Use a blue background color for the button
    color: '#fff', // Use white text for the button
    border: 'none', // Remove the border
    borderRadius: '5px', // Add rounded corners to the button
    cursor: 'pointer', // Change the cursor to a pointer on hover
  },
};

export default App;
