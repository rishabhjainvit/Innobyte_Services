import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import RoomsSuites from './components/RoomsSuites';
import Dining from './components/Dining';
import Facilities from './components/Facilities';
// import Gallery from './components/Gallery';
import LocalAttractions from './components/LocalAttractions';
import SpecialOffers from './components/SpecialOffers';
// import Events from './components/Events';
// import Blog from './components/Blog';
// import FAQs from './components/FAQs';
import ContactUs from './components/ContactUs';
// import Careers from './components/Careers';

const navStyle = {
  padding: '12px 20px',
  backgroundColor: 'rgb(19, 36, 53)', // Light background color for better contrast
  color: '#333',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds a soft shadow for depth
  // borderRadius: '8px', // Rounded corners for a modern look
};

const linkStyle = {
  color: '#007bff', // Bright blue color for links
  textDecoration: 'none',
  padding: '10px 18px',
  fontWeight: 'bold',
  borderRadius: '25px', // Full-rounded buttons for links
  backgroundColor: '#e7f1ff', // Light blue background for a gentle effect
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 4px rgba(0, 123, 255, 0.2)', // Adds slight shadow for depth
};

// Hover effect
const linkHoverStyle = {
  backgroundColor: '#007bff',
  color: '#ffffff', // Switch to white text on hover
  boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)', // Enhances shadow on hover
};

// Apply linkHoverStyle in the onMouseEnter and onMouseLeave events of the link components in your JSX


const App = () => {
  const [hoveredLink, setHoveredLink] = useState(null); // Track hovered link for animation

  const handleMouseEnter = (index) => {
    setHoveredLink(index); // Track hovered link
  };

  const handleMouseLeave = () => {
    setHoveredLink(null); // Reset hovered link
  };

  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <Link
            to="/"
            style={{
              ...linkStyle,
              ...(hoveredLink === 0 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              ...linkStyle,
              ...(hoveredLink === 1 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            About Us
          </Link>
          <Link
            to="/rooms"
            style={{
              ...linkStyle,
              ...(hoveredLink === 2 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            Rooms & Suites
          </Link>
          <Link
            to="/dining"
            style={{
              ...linkStyle,
              ...(hoveredLink === 3 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            Dining
          </Link>
          <Link
            to="/facilities"
            style={{
              ...linkStyle,
              ...(hoveredLink === 4 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            Facilities
          </Link>
          {/* <Link
            to="/gallery"
            style={{
              ...linkStyle,
              ...(hoveredLink === 5 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
  
          </Link> */}
          {/* <Link
            to="/attractions"
            style={{
              ...linkStyle,
              ...(hoveredLink === 6 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            Attractions
          </Link> */}
          <Link
            to="/offers"
            style={{
              ...linkStyle,
              ...(hoveredLink === 7 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
            Special Offers
          </Link>
          {/* <Link
            to="/events"
            style={{
              ...linkStyle,
              ...(hoveredLink === 8 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(8)}
            onMouseLeave={handleMouseLeave}
          >
            Events
          </Link>
          <Link
            to="/blog"
            style={{
              ...linkStyle,
              ...(hoveredLink === 9 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(9)}
            onMouseLeave={handleMouseLeave}
          >
            Blog
          </Link>
          <Link
            to="/faqs"
            style={{
              ...linkStyle,
              ...(hoveredLink === 10 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(10)}
            onMouseLeave={handleMouseLeave}
          >
            FAQs
          </Link> */}
          <Link
            to="/contact"
            style={{
              ...linkStyle,
              ...(hoveredLink === 11 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(11)}
            onMouseLeave={handleMouseLeave}
          >
            Contact Us
          </Link>
          {/* <Link
            to="/careers"
            style={{
              ...linkStyle,
              ...(hoveredLink === 12 ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(12)}
            onMouseLeave={handleMouseLeave}
          >
            Careers
          </Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/rooms" element={<RoomsSuites />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/facilities" element={<Facilities />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/attractions" element={<LocalAttractions />} />
          <Route path="/offers" element={<SpecialOffers />} />
          {/* <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/careers" element={<Careers />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
