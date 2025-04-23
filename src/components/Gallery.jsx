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

export default Gallery;