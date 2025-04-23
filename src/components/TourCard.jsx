import React, { useState } from 'react';

const TourCard = ({ tour, onRemove }) => {
  const { id, name, info, image, price } = tour;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="tour-card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{name}</h2>
        <h4 style={styles.price}>${price}</h4>
        <p style={styles.info}>
          {showInfo ? info : `${info.substring(0, 100)}...`}
          <button
            onClick={() => setShowInfo(!showInfo)}
            style={styles.toggleButton}
          >
            {showInfo ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button onClick={() => onRemove(id)} style={styles.removeButton}>
          Not Interested
        </button>
      </div>
    </div>
  );
};


export default TourCard;