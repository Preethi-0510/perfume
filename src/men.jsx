import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Mensection() {
  const products = [
    {
      title: 'Amber Oud Intense',
      price: 'Rs. 4,599.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRxsRyVjizVh8aUD0mOYGkBXcX2UZaMCHuA&s',
      rating: '5.0',
    },
    {
      title: 'Musk Essence',
      price: 'Rs. 2,299.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DBJVY00q-umE20VREpKhOpNsDIo1Pxbo-uUAVHPz3p2AFDt4UL_0iY_gYD_sQOIqeLI&usqp=CAU',
      rating: '4.8',
    },
    {
      title: 'Bangalore Bloom',
      price: 'Rs. 1,129.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwmCZsm5M4Wc7FJ_6K_puzerLH0EUsf_f0_N1mNnAKnxQcaNm-JHE9E5RZJKXuLOSXuo&usqp=CAU',
      rating: '4.9',
    },
    {
      title: 'Mystic Oud Noir',
      price: 'Rs. 2,799.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_6dLj1LMy1ef5ho9TYgblvyc0ip0qjtHxQ&s',
      rating: '4.7',
    },
    {
      title: 'Royal Cuddle Oud',
      price: 'Rs. 3,999.00',
      img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/perfume/0/i/r/30-cuddle-perfume-for-women-premium-luxury-long-lasting-original-imagrguxhc5znpfp.jpeg?q=90&crop=false',
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
    cursor: 'pointer',
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
    <section id="women" style={{ backgroundColor: '#fffaf4', padding: '40px 0' }}>
      <Container style={{ marginTop: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4a2c2a' }}>
          DISCOVER <span style={{ color: '#BFA74D' }}>WOMEN</span>
        </h2>
        <div style={scrollContainerStyle}>
          {products.map((product, index) => (
            <Card
              key={index}
              style={cardStyle}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
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

export default Mensection;

