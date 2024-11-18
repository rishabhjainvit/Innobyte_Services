import React from 'react';

const Gallery = () => {
  const galleryStyle = {
    padding: '40px',
    backgroundColor: '#f2dede',
    borderRadius: '10px',
    margin: '20px'
  };

  return (
    <div style={galleryStyle}>
      <h1>Gallery</h1>
      <p>Take a visual tour of our guest house.</p>
    </div>
  );
};

export default Gallery;
