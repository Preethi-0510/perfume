import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Womensection() {
  const products = [
  {
    title: 'Floral Dream',
    price: 'Rs. 1,129.00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTrk6f0mMFy-q4vLiHIVQl4KBKg-lzI9eFQ&s',
    rating: '5.0',
  },
  {
    title: 'Mystic Blossom',
    price: 'Rs. 1,129.00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVs_G5NBxjaj8xHhOTbJ9IiTRTSBhIRJKw&s',
    rating: '5.0',
  },
  {
    title: 'Golden Oud',
    price: 'Rs. 3,499.00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-yhTiR4GrA4Kn6yl867qIlievx3cqEt76Q&s',
    rating: '5.5',
  },
  {
    title: 'Velvet Musk',
    price: 'Rs. 2,299.00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ewKWq5aIFewueHtizxEVZGHtFdfVY0EIpQ&s',
    rating: '4.8',
  },
  {
    title: 'Beirut Nights',
    price: 'Rs. 3,499.00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dJGT01mFiJorxXmCJTbtibHDJpBf3uV1Xg&s',
    rating: '5.0',
  },
];


  const scrollContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
    gap: '20px',
    padding: '10px',
    scrollBehavior: 'smooth',
  };

  const cardStyle = {
    minWidth: '240px',
    flex: '0 0 auto',
    borderRadius: '15px',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'relative',
    background: '#fef6f0',
    color: '#4a2c2a',
    border: '1px solid #e0d1c3',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  };

  const ratingBadgeStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#BFA74D',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '0.8rem',
  };

  const imageStyle = {
    height: '220px',
    objectFit: 'cover',
  };

  return (
     <section id="combo"><Container style={{ marginTop: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4a2c2a' }}>
        DISCOVER <span style={{ color: '#BFA74D' }}>COMBO</span>
      </h2>
      <div style={scrollContainerStyle}>
        {products.map((product, index) => (
          <Card
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={ratingBadgeStyle}>⭐ {product.rating}</div>
            <Card.Img variant="top" src={product.img} style={imageStyle} />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold' }}>{product.title}</Card.Title>
              <Card.Text style={{ color: '#555', margin: '10px 0' }}>
                From <strong>{product.price}</strong>
              </Card.Text>
              <Button variant="dark" style={{ backgroundColor: '#4a2c2a', border: 'none' }}>
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
    </section>
  );
}

export default Womensection;
