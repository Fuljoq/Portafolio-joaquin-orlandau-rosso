import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
      <h2 className="loader-text">Cargando Portfolio...</h2>
    </div>
  );
};

export default Loader;
