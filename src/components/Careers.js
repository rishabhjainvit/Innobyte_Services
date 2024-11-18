import React from 'react';

const Careers = () => {
  const careersStyle = {
    padding: '40px',
    backgroundColor: '#f9ebea',
    borderRadius: '10px',
    margin: '20px'
  };

  return (
    <div style={careersStyle}>
      <h1>Careers</h1>
      <p>Join our team and grow with us! Explore our current job openings.</p>
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#16a085',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
      }}>
        View Openings
      </button>
    </div>
  );
};

export default Careers;
