import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, onRemove }) => {
  return (
    <div style={styles.gallery}>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
  },
};

export default Gallery;