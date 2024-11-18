import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const RoomsSuites = () => {
  const containerStyle = {
    width: '100vw',           // Full width of the viewport
    padding: '20px 0',        // Top and bottom padding, no left/right padding
    backgroundColor: 'rgb(19, 36, 53)',
    fontFamily: "'Arial', sans-serif",
    color: '#000',
    textAlign: 'center',
    overflowX: 'hidden',      // Hide horizontal overflow if any
  };

  const sectionStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '40px 0',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  };

  const textStyle = {
    flex: 1,
    fontSize: '18px',
    padding: '20px',
    textAlign: 'left',
  };

  const imageContainerStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '18px',             // Reduced arrow size
    color: '#333',
    cursor: 'pointer',
    padding: '5px',               // Smaller padding for a compact look
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };
  
  const images = [
    'https://via.placeholder.com/300x200?text=Room+1',
    'https://via.placeholder.com/300x200?text=Room+2',
    'https://via.placeholder.com/300x200?text=Room+3',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [roomRef, roomInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [suiteRef, suiteInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [premiumRef, premiumInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div style={containerStyle}>
      <h1>Rooms & Suites</h1>
      <p>Explore our selection of rooms and suites tailored for your comfort.</p>

      {/* Standard Room Section */}
      <section
        ref={roomRef}
        style={{
          ...sectionStyle,
          ...(roomInView ? { opacity: 1, transform: 'translateY(0)' } : {}),
        }}
      >
        <div style={textStyle}>
          <h2>Standard Room</h2>
          <p>Enjoy a cozy and comfortable stay in our standard rooms, equipped with modern amenities.</p>
          <p>Features include a plush bed, complimentary Wi-Fi, and a serene view of the cityscape.</p>
        </div>
        <div style={imageContainerStyle}>
          <img
            src={images[currentImageIndex]}
            alt="Standard Room"
            style={imageStyle}
          />
          <span style={{ ...arrowStyle, left: '10px' }} onClick={handlePrevious}>
            &#9664;
          </span>
          <span style={{ ...arrowStyle, right: '10px' }} onClick={handleNext}>
            &#9654;
          </span>
        </div>
      </section>

      {/* Deluxe Suite Section */}
      <section
        ref={suiteRef}
        style={{
          ...sectionStyle,
          flexDirection: 'row-reverse',
          ...(suiteInView ? { opacity: 1, transform: 'translateY(0)' } : {}),
        }}
      >
        <div style={textStyle}>
          <h2>Deluxe Suite</h2>
          <p>Experience luxury in our deluxe suites, designed for those seeking extra space and premium amenities.</p>
          <p>The suite includes a spacious living area, a large bed, and access to exclusive guest services.</p>
        </div>
        <div style={imageContainerStyle}>
          <img
            src={images[currentImageIndex]}
            alt="Deluxe Suite"
            style={imageStyle}
          />
          <span style={{ ...arrowStyle, left: '10px' }} onClick={handlePrevious}>
            &#9664;
          </span>
          <span style={{ ...arrowStyle, right: '10px' }} onClick={handleNext}>
            &#9654;
          </span>
        </div>
      </section>

      {/* Premium Suite Section */}
      <section
        ref={premiumRef}
        style={{
          ...sectionStyle,
          ...(premiumInView ? { opacity: 1, transform: 'translateY(0)' } : {}),
        }}
      >
        <div style={textStyle}>
          <h2>Premium Suite</h2>
          <p>Indulge in our premium suites, offering unparalleled comfort and sophistication for a memorable stay.</p>
          <p>Features include a king-size bed, a private balcony with breathtaking views, and personalized services.</p>
        </div>
        <div style={imageContainerStyle}>
          <img
            src={images[currentImageIndex]}
            alt="Premium Suite"
            style={imageStyle}
          />
          <span style={{ ...arrowStyle, left: '10px' }} onClick={handlePrevious}>
            &#9664;
          </span>
          <span style={{ ...arrowStyle, right: '10px' }} onClick={handleNext}>
            &#9654;
          </span>
        </div>
      </section>
    </div>
  );
};

export default RoomsSuites;
