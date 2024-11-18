import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  const events = [
    { id: 1, title: 'Annual Gala', date: '2024-12-25', details: 'Join us for our Annual Gala with live music, dinner, and celebrations.' },
    { id: 2, title: 'Tech Conference', date: '2025-01-15', details: 'Explore the latest in tech at our conference, featuring top speakers.' },
    { id: 3, title: 'Community Outreach', date: '2024-11-30', details: 'Participate in our community outreach program to give back to the community.' },
    { id: 4, title: 'Holiday Celebration', date: '2024-12-20', details: 'Celebrate the holiday season with us with fun activities and surprises!' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextEvent = events.find(event => new Date(event.date) > new Date());
      if (nextEvent) {
        const eventDate = new Date(nextEvent.date);
        const now = new Date();
        const diff = eventDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [events]);

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
    setShowConfetti(false);
  };

  const handleClaimOffer = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const eventsStyle = {
    padding: '40px',
    background: 'linear-gradient(135deg, #f0e68c, #ffe4b5)',
    borderRadius: '10px',
    margin: '20px',
    textAlign: 'center',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    animation: 'fadeIn 1s ease',
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.1)',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    width: '90%',
    maxWidth: '500px',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1000,
    opacity: showModal ? '1' : '0',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 999,
    opacity: showModal ? '1' : '0',
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div style={{ padding: '0', overflowY: 'scroll', height: '100vh' }}>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      
      <div style={eventsStyle}>
        <h1 style={{ color: '#ff6f61', fontSize: '2.5em', fontWeight: 'bold' }}>Events</h1>
        <p style={{ fontSize: '18px', color: '#e74c3c', margin: '10px 0' }}>
          Time until next event: {timeLeft}
        </p>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff6f61',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.1em',
            transition: 'background 0.3s ease, transform 0.3s ease',
          }}
          onClick={() => alert("See the list of our upcoming events below!")}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Upcoming Events
        </button>
        
        <div style={{ marginTop: '30px' }}>
          {events.map((event) => (
            <div
              key={event.id}
              style={{
                margin: '20px 0',
                padding: '20px',
                background: 'linear-gradient(135deg, #e3f2fd, #ffeb3b)',
                borderRadius: '10px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <h2 style={{ color: '#f39c12' }}>{event.title}</h2>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <button
                onClick={() => handleViewEvent(event)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#3498db',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div>
          <div style={overlayStyle} onClick={handleCloseModal}></div>
          <div style={modalStyle}>
            <h2 style={{ color: '#e74c3c' }}>{selectedEvent.title}</h2>
            <p>{selectedEvent.details}</p>
            <p style={{ fontSize: '14px', color: '#7f8c8d' }}>
              Event Date: {new Date(selectedEvent.date).toLocaleDateString()}
            </p>
            <button
              onClick={handleClaimOffer}
              style={{
                padding: '10px 20px',
                backgroundColor: '#2ecc71',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'background 0.3s ease, transform 0.3s ease',
              }}
            >
              Book Slot
            </button>
            <button
              onClick={handleCloseModal}
              style={{
                padding: '10px 20px',
                backgroundColor: '#c0392b',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'background 0.3s ease, transform 0.3s ease',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
