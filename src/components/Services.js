import React from 'react';

const Services = () => {
  const styles = {
    servicesSection: {
      padding: '50px 20px',
      backgroundColor: '#fff',
      textAlign: 'center',
    },
    title: {
      fontSize: '36px',
      marginBottom: '20px',
    },
    serviceList: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '20px',
    },
    serviceItem: {
      flex: '1',
      minWidth: '250px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
  };

  return (
    <section id="services" style={styles.servicesSection}>
      <h2 style={styles.title}>Our Services</h2>
      <div style={styles.serviceList}>
        <div style={styles.serviceItem}>Free Wi-Fi</div>
        <div style={styles.serviceItem}>Room Service</div>
        <div style={styles.serviceItem}>24/7 Support</div>
      </div>
    </section>
  );
};

export default Services;
