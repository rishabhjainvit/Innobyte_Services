import React from 'react';

const Blog = () => {
  const blogStyle = {
    padding: '40px',
    backgroundColor: '#f4f6f7',
    borderRadius: '10px',
    margin: '20px'
  };

  return (
    <div style={blogStyle}>
      <h1>Our Blog</h1>
      <p>Read about our latest news, tips, and travel guides.</p>
    </div>
  );
};

export default Blog;
