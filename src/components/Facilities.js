import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Facilities = () => {
  const facilitiesRef = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  const facilities = [
    {
      title: 'Luxury Spa',
      description:
        'Relax and rejuvenate with our full-service spa featuring a range of therapeutic treatments designed to enhance well-being and relaxation.',
      img: 'https://via.placeholder.com/600x400?text=Luxury+Spa',
      animation: 'fade-up',
    },
    {
      title: 'Modern Gym',
      description:
        'Stay fit and energized with our state-of-the-art gym facilities. Equipped with the latest workout machines and guided sessions.',
      img: 'https://via.placeholder.com/600x400?text=Modern+Gym',
      animation: 'fade-right',
    },
    {
      title: 'Swimming Pool',
      description:
        'Enjoy a refreshing swim in our expansive outdoor pool, complete with poolside service and scenic views.',
      img: 'https://via.placeholder.com/600x400?text=Swimming+Pool',
      animation: 'fade-left',
    },
    {
      title: 'Fine Dining Restaurant',
      description:
        'Experience gourmet dining at our in-house restaurant, offering a variety of cuisines crafted by expert chefs.',
      img: 'https://via.placeholder.com/600x400?text=Fine+Dining',
      animation: 'zoom-in',
    },
    {
      title: 'Business Lounge',
      description:
        'A professional workspace with high-speed internet, meeting rooms, and refreshments to support all your business needs.',
      img: 'https://via.placeholder.com/600x400?text=Business+Lounge',
      animation: 'fade-up',
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'rgb(19, 36, 53)', padding: '20px' }}>
      <h1
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: '3rem',
          marginBottom: '50px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      >
        Our Exclusive Facilities
      </h1>
      {facilities.map((facility, index) => (
        <div
          key={index}
          ref={(el) => (facilitiesRef.current[index] = el)}
          data-aos={facility.animation}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '40px',
            padding: '20px',
            transition: 'all 0.5s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              width: '100%',
              maxWidth: '1200px',
              alignItems: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={facility.img}
              alt={facility.title}
              style={{
                width: '50%',
                height: 'auto',
                borderRadius: '10px',
                objectFit: 'cover',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              }}
            />
            <div
              style={{
                padding: '20px',
                flex: 1,
                color: '#555',
                textAlign: 'left',
                fontSize: '1.2rem',
                fontWeight: '500',
              }}
            >
              <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '15px' }}>
                {facility.title}
              </h2>
              <p style={{ lineHeight: '1.8' }}>{facility.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          textAlign: 'center',
          marginTop: '60px',
          backgroundColor: 'rgb(19, 36, 53)',
          color: '#fff',
          padding: '30px',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Ready to Experience Our World-Class Facilities?
        </h2>
        <button
          style={{
            padding: '15px 30px',
            backgroundColor: '#ff6347',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '1.2rem',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff4500')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff6347')}
        >
          Book Your Stay Now
        </button>
      </div>
    </div>
  );
};

export default Facilities;
