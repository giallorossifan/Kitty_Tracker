import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* import ImageCarouselPage from './ImageCarouselPage'; // Import the component
 */
const AskMe = () => {
  const [showImages, setShowImages] = useState(false); // State variable to control image visibility

  const toggleImages = () => {
    setShowImages(prevShowImages => !prevShowImages);
  };

  return (
    <div className='askme-container'>
      <button type='button' onClick={toggleImages}>
        <h3>View my Pics</h3>
      </button>
      {showImages && <ImageCarouselPage />} {/* Render ImageCarouselPage conditionally */}
    </div>
  );
};

export default AskMe;
