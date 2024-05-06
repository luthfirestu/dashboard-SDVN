// components/LoadingIndicator.js
import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
    </div>
  );
};

export default LoadingIndicator;
