import React, { useState } from 'react';

const SpecialOffers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [claimedOffers, setClaimedOffers] = useState([]);

  const offers = [
    { id: 1, title: '20% Off on First Purchase', details: 'Enjoy a 20% discount on your first purchase. Use code FIRST20 at checkout!' },
    { id: 2, title: 'Free Shipping on Orders Over $50', details: 'Get free shipping on all orders over $50. No code needed!' },
    { id: 3, title: 'Buy 2 Get 1 Free', details: 'Buy any 2 items and get 1 free. Use code B2G1FREE at checkout!' },
    { id: 4, title: 'Exclusive Member Discount', details: 'Sign up as a member to get 15% off every purchase!' },
    { id: 5, title: 'Flash Sale - Up to 50% Off', details: 'Limited time offer on selected items. Grab yours now!' },
  ];

  const handleViewOffer = (offer) => {
    setSelectedOffer(offer);
    setShowModal(true);
  };

  const handleClaimOffer = (offerId) => {
    setClaimedOffers((prev) => [...prev, offerId]);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const offersContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    padding: '40px 20px',
    backgroundColor: 'rgb(19, 36, 53)',
    textAlign: 'center',
    minHeight: '100vh',
  };

  const offerBoxStyle = {
    backgroundColor: '#f9fbfd',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '250px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const claimedBoxStyle = {
    ...offerBoxStyle,
    backgroundColor: '#d4edda',
    border: '2px solid #28a745',
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    width: '90%',
    maxWidth: '500px',
    textAlign: 'center',
    zIndex: 1001,
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  };

  return (
    <div style={{ padding: '0', overflowY: 'auto' }}>
      <div style={offersContainerStyle}>
        <h1 style={{ width: '100%', color: '#fff', marginBottom: '20px' }}>Special Offers</h1>
        <p style={{ width: '100%', color: '#ddd', marginBottom: '40px' }}>Discover our latest deals and exclusive discounts below.</p>
        {offers.map((offer) => (
          <div
            key={offer.id}
            style={claimedOffers.includes(offer.id) ? claimedBoxStyle : offerBoxStyle}
            onClick={() => handleViewOffer(offer)}
          >
            <h2>{offer.title}</h2>
            {claimedOffers.includes(offer.id) && (
              <span style={{ color: '#28a745', fontWeight: 'bold', marginTop: '10px' }}>Offer Claimed</span>
            )}
            {!claimedOffers.includes(offer.id) && (
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '20px',
                  transition: 'background 0.3s',
                }}
              >
                View Offer
              </button>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div>
          <div style={overlayStyle} onClick={() => setShowModal(false)}></div>
          <div style={modalStyle}>
            <h2>{selectedOffer.title}</h2>
            <p>{selectedOffer.details}</p>
            {claimedOffers.includes(selectedOffer.id) ? (
              <h3 style={{ color: '#28a745' }}>Already Claimed!</h3>
            ) : (
              <button
                onClick={() => handleClaimOffer(selectedOffer.id)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '20px',
                }}
              >
                Claim Offer
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialOffers;
