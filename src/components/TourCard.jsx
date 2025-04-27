import React, { useState } from 'react'; // Import React and useState hook

// TourCard component to display individual tour details
const TourCard = ({ tour, onRemove }) => {
  const { id, name, info, image, price } = tour; // Destructure tour properties
  const [showInfo, setShowInfo] = useState(false); // State to toggle tour description

  return (
    <div className="tour-card" style={styles.card}>
      {/* Display the tour image */}
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.content}>
        {/* Display the tour name and price */}
        <h2 style={styles.title}>{name}</h2>
        <h4 style={styles.price}>${price}</h4>
        {/* Display the tour description with a toggle button */}
        <p style={styles.info}>
          {showInfo ? info : `${info.substring(0, 100)}...`}
          <button
            onClick={() => setShowInfo(!showInfo)} // Toggle the description
            style={styles.toggleButton}
          >
            {showInfo ? 'Show Less' : 'Read More'}
          </button>
        </p>
        {/* Button to remove the tour */}
        <button onClick={() => onRemove(id)} style={styles.removeButton}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

// Inline styles for the TourCard component
const styles = {
  card: {
    border: '1px solid #ddd', // Border around the card
    borderRadius: '8px', // Rounded corners
    overflow: 'hidden', // Clip content that overflows
    margin: '16px', // Margin around the card
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    maxWidth: '400px', // Limit the card width
    backgroundColor: '#fff', // White background
  },
  image: {
    width: '100%', // Full width
    height: '200px', // Fixed height
    objectFit: 'cover', // Maintain aspect ratio
  },
  content: {
    padding: '16px', // Padding inside the card
  },
  title: {
    fontSize: '1.5rem', // Large font size for the title
    margin: '0 0 8px', // Margin below the title
  },
  price: {
    color: '#2a9d8f', // Green color for the price
    fontWeight: 'bold', // Bold text
    marginBottom: '8px', // Margin below the price
  },
  info: {
    fontSize: '0.9rem', // Smaller font size for the description
    lineHeight: '1.5', // Line height for readability
    marginBottom: '16px', // Margin below the description
  },
  toggleButton: {
    background: 'none', // No background
    border: 'none', // No border
    color: '#007bff', // Blue text
    cursor: 'pointer', // Pointer cursor on hover
    padding: '0', // No padding
    fontSize: '0.9rem', // Small font size
  },
  removeButton: {
    backgroundColor: '#e63946', // Red background
    color: '#fff', // White text
    border: 'none', // No border
    padding: '10px 16px', // Padding inside the button
    borderRadius: '4px', // Rounded corners
    cursor: 'pointer', // Pointer cursor on hover
  },
};

export default TourCard;