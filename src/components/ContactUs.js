import React, { useState } from 'react';

const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerStyle = {
    padding: '50px',
    maxWidth: '1200px',
    backgroundColor: 'rgb(19, 36, 53)',
    borderRadius: '0px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    textAlign: 'center',
    animation: isHovered ? 'scaleUp 0.3s ease-in-out' : 'none',
    transition: 'transform 0.3s ease-in-out',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '12px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const buttonStyle = {
    padding: '12px 30px',
    backgroundColor: isHovered ? '#d9534f' : '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease-in-out',
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 style={{ color: '#fff' }}>Get in Touch</h1>
      <p style={{ color: '#fff' }}>
        We would love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      {isSubmitted && (
        <div style={{ color: 'green', fontWeight: 'bold', marginBottom: '20px' }}>
          Message Sent Successfully!
        </div>
      )}
      <input 
        type="text" 
        placeholder="Your Name" 
        style={inputStyle} 
        onFocus={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)')}
        onBlur={(e) => (e.target.style.boxShadow = 'none')}
      />
      <input 
        type="email" 
        placeholder="Your Email" 
        style={inputStyle} 
        onFocus={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)')}
        onBlur={(e) => (e.target.style.boxShadow = 'none')}
      />
      <textarea 
        placeholder="Your Message" 
        style={{ ...inputStyle, height: '120px' }} 
        onFocus={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)')}
        onBlur={(e) => (e.target.style.boxShadow = 'none')}
      />
      <button 
        style={buttonStyle}
        onClick={handleSubmit}
      >
        {isHovered ? ' Send Message' : 'Send Message'}
      </button>

      <div style={socialIconsStyle}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f" style={{ fontSize: '24px', color: '#4267B2' }}></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={{ fontSize: '24px', color: '#1DA1F2' }}></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in" style={{ fontSize: '24px', color: '#0077B5' }}></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#E4405F' }}></i>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
