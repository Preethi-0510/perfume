import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Image() {
  const products = [
    {
      title: 'Floral Dream',
      price: 'Rs. 1,129.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zewNBfPcgrg8yQTlfv_gcinksqjV6Govsw&s',
      rating: '5.0',
      bgColor: '#fbe8e7', // Light pink
    },
    {
      title: 'Mystic Blossom',
      price: 'Rs. 1,129.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPln7xWZIVn4QOt8cm8Tt0Yg9LkPLEb4oL0Q&s',
      rating: '5.0',
      bgColor: '#e9e7f6', // Light lavender
    },
    {
      title: 'Golden Oud',
      price: 'Rs. 3,499.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzec7yr23FOguaXCtfmYq3E82J4uG2fRLz7w&s',
      rating: '5.5',
      bgColor: '#f7f0e8', // Light beige
    },
    {
      title: 'Velvet Musk',
      price: 'Rs. 2,299.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIaqw7LiVyY7GrRTTbyLupzG7PlIq6EzFmg&s',
      rating: '4.8',
      bgColor: '#e8f0f4', // Soft blue-gray
    },
    {
      title: 'Beirut Nights',
      price: 'Rs. 3,499.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRbzRYLSCW2i-1rd7Onsx2QyX7LWhtKJOLQ&s',
      rating: '5.0',
      bgColor: '#f2efe6', // Warm light brown
    },
  ];

  const scrollContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
    gap: '20px',
    padding: '10px',
    scrollBehavior: 'smooth',
  };

  const cardBaseStyle = {
    minWidth: '240px',
    maxWidth: '260px',
    width: '100%',
    flex: '0 0 auto',
    borderRadius: '15px',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'relative',
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
       <section id="Gift"> <Container style={{ marginTop: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4a2c2a' }}>
        DISCOVER <span style={{ color: '#BFA74D' }}>GIFT</span>
      </h2>
      <div style={scrollContainerStyle}>
        {products.map((product, index) => (
          <Card
            key={index}
            style={{ ...cardBaseStyle, backgroundColor: product.bgColor, color: '#4a2c2a', border: '1px solid #e0d1c3' }}
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

export default Image;
