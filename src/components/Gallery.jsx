import React from 'react';
import TourCard from './TourCard';

// Gallery component to display a list of tours
const Gallery = ({ tours, onRemove }) => {
  return (
    <div style={styles.gallery}>
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
};

// Inline styles for the Gallery component
const styles = {
  gallery: {
    display: 'flex', // Use flexbox for layout
    flexWrap: 'wrap', // Allow items to wrap to the next row
    justifyContent: 'center', // Center items horizontally
    gap: '16px', // Add spacing between items
    padding: '16px', // Add padding around the gallery
    backgroundColor: '#f9f9f9', // Light background color
  },
};

export default Gallery;