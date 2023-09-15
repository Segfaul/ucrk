import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [previousLocation, setPreviousLocation] = useState(null);
  const currentLocation = useLocation();

  useEffect(() => {
    if (previousLocation === null || currentLocation.pathname !== previousLocation.pathname) {
        setShowLoader(true);
        setPreviousLocation(currentLocation);
    }
  }, [currentLocation, previousLocation]);

  if (showLoader) {
    return (
      <div onAnimationEnd={() => setShowLoader(false)} className="loader-container">
        <img src={require('../../assets/logo-ucrk.png')} alt="Loading..." className="loader-image" />
      </div>
    );
  }

  return null;
};

export default Loader;
