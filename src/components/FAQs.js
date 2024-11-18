import React from 'react';

const FAQs = () => {
  const faqStyle = {
    padding: '40px',
    backgroundColor: '#d5f5e3',
    borderRadius: '10px',
    margin: '20px'
  };

  const questionStyle = {
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  return (
    <div style={faqStyle}>
      <h1>Frequently Asked Questions</h1>
      <div>
        <p style={questionStyle}>Q: What are the check-in and check-out times?</p>
        <p>A: Check-in is from 2 PM, and check-out is until 12 PM.</p>
      </div>
      <div>
        <p style={questionStyle}>Q: Do you offer free Wi-Fi?</p>
        <p>A: Yes, complimentary Wi-Fi is available throughout the property.</p>
      </div>
    </div>
  );
};

export default FAQs;
