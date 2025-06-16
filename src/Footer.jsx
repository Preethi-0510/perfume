import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} PerfumeAddiction. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#fdf6f0',  // Soft cream
  color: '#4B3621',            // Coffee brown
  padding: '15px 0',
  textAlign: 'center',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

export default Footer;
