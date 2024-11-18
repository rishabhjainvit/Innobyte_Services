import React from 'react';
import { useInView } from 'react-intersection-observer';
import B from '../assest/B.png';

const About = () => {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const styles = {
    pageContainer: {
      fontFamily: "'Arial', sans-serif",
      backgroundColor: 'rgb(19, 36, 53)', // Light background for the whole page
      color: '#333',
      padding: '50px 5%', // Added more padding for left and right
      minHeight: '100vh',
    },
    section: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '50px 20px',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      marginBottom: '40px',
      transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
      opacity: 0,
      transform: 'translateY(20px)',
    },
    sectionVisible: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    content: {
      flex: 1,
      padding: '0 40px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#222',
      marginBottom: '20px',
      letterSpacing: '1px',
    },
    text: {
      fontSize: '18px',
      color: '#555',
      lineHeight: '1.8',
    },
    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginLeft: '20px',
    },
    image: {
      width: '100%',
      maxWidth: '400px',
      transition: 'transform 0.4s ease',
    },
    imageHover: {
      transform: 'scale(1.05)',
    },
    list: {
      paddingLeft: '20px',
      listStyleType: 'disc',
      color: '#555',
    },
    listItem: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.pageContainer}>
      {/* About Section */}
      <section
        ref={aboutRef}
        style={{
          ...styles.section,
          ...(aboutInView ? styles.sectionVisible : {}),
        }}
      >
        <div style={styles.content}>
          <h2 style={styles.title}>About Us</h2>
          <p style={styles.text}>
            King Sukh Guest House offers a relaxing stay with top-notch amenities and services. Nestled in a serene environment,
            our comfortable rooms, modern facilities, and welcoming staff provide a tranquil escape. Whether you’re here for
            business or leisure, we ensure a memorable experience.
          </p>
          <p style={styles.text}>
            Our guest house features beautiful views, a cozy lounge, and a team dedicated to your comfort. Relax, unwind, and
            make unforgettable memories at King Sukh Guest House.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src={B}
            alt="About Us"
            style={{
              ...styles.image,
              ...(aboutInView ? styles.imageHover : {}),
            }}
          />
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionRef}
        style={{
          ...styles.section,
          ...(missionInView ? styles.sectionVisible : {}),
          flexDirection: 'row-reverse',
        }}
      >
        <div style={styles.content}>
          <h2 style={styles.title}>Our Mission</h2>
          <p style={styles.text}>
            Our mission is to create a peaceful haven for our guests, offering warm hospitality, exquisite amenities, and
            unmatched customer service. We are committed to making your stay comfortable, relaxing, and truly memorable.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Our Mission"
            style={{
              ...styles.image,
              ...(missionInView ? styles.imageHover : {}),
            }}
          />
        </div>
      </section>

      {/* Vision Section */}
      <section
        ref={visionRef}
        style={{
          ...styles.section,
          ...(visionInView ? styles.sectionVisible : {}),
        }}
      >
        <div style={styles.content}>
          <h2 style={styles.title}>Our Vision</h2>
          <p style={styles.text}>
            We envision becoming a top-rated destination, where guests can escape the hustle and bustle of daily life and
            immerse themselves in comfort and peace. Our vision is to be a place that guests love to return to, a place that
            feels like home.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Our Vision"
            style={{
              ...styles.image,
              ...(visionInView ? styles.imageHover : {}),
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        style={{
          ...styles.section,
          ...(servicesInView ? styles.sectionVisible : {}),
          flexDirection: 'row-reverse',
        }}
      >
        <div style={styles.content}>
          <h2 style={styles.title}>Our Services</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>24/7 Room Service</li>
            <li style={styles.listItem}>Complimentary Breakfast</li>
            <li style={styles.listItem}>High-Speed Wi-Fi</li>
            <li style={styles.listItem}>Laundry Service</li>
            <li style={styles.listItem}>Tour and Travel Assistance</li>
          </ul>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Our Services"
            style={{
              ...styles.image,
              ...(servicesInView ? styles.imageHover : {}),
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
