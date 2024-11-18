import React, { useState } from 'react';

const Dining = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: 'https://via.placeholder.com/1200x600',
      caption: 'Gourmet Delights - Indulge in carefully curated dishes crafted by expert chefs.',
    },
    {
      src: 'https://via.placeholder.com/1200x600',
      caption: 'Elegant Ambiance - Enjoy a cozy, elegant setting perfect for every meal.',
    },
    {
      src: 'https://via.placeholder.com/1200x600',
      caption: 'Scenic Outdoor Seating - Dine with a view in our beautiful outdoor seating.',
    },
    {
      src: 'https://via.placeholder.com/1200x600',
      caption: 'Exquisite Desserts - End your meal with our delicious desserts.',
    }
  ];

  const containerStyle = {
    padding: '20px',
    backgroundColor: 'rgb(19, 36, 53)',
    borderRadius: '0px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '100%',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#8b4513',
    marginBottom: '20px',
  };

  const contentStyle = {
    fontSize: '1.2rem',
    color: '#fff',
    marginBottom: '40px',
  };

  const carouselContainer = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '600px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    objectFit: 'cover',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: '#333',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1,
  };

  const leftArrowStyle = { ...arrowStyle, left: '20px' };
  const rightArrowStyle = { ...arrowStyle, right: '20px' };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#fff',
    marginTop: '10px',
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Our Exquisite Dining Experience</h1>
      <p style={contentStyle}>
        Discover the finest culinary delights crafted to perfection by our experienced chefs. From gourmet dishes to scenic outdoor dining, each experience is designed to tantalize your senses and provide a memorable dining adventure.
      </p>

      <div style={carouselContainer}>
        <span onClick={handlePrev} style={leftArrowStyle}>&#10094;</span>
        <img
          src={images[currentIndex].src}
          alt="Dining Option"
          style={imageStyle}
        />
        <span onClick={handleNext} style={rightArrowStyle}>&#10095;</span>
      </div>
      <p style={descriptionStyle}>{images[currentIndex].caption}</p>

      <div style={{ marginTop: '40px' }}>
        <p style={{ fontSize: '1.1rem', color: '#fff' }}>
          We invite you to explore our extensive menu, featuring everything from appetizers to main courses and decadent desserts. Each dish is crafted with the freshest ingredients to bring you a dining experience that is both delicious and unforgettable.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#fff', marginTop: '20px' }}>
          Whether you're looking for an intimate dinner or a group celebration, our elegant ambiance and exceptional service ensure that your experience is as exquisite as our cuisine.
        </p>
      </div>
    </div>
  );
};

export default Dining;
