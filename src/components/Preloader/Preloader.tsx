import React from 'react';
import './Preloader.styles.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
    </div>
  );
};

export default Preloader;