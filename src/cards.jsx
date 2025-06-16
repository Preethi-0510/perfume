import React, { useState, useRef } from "react";
import { Container, Navbar, Nav, Badge, Button, Modal, Card, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import './perfume.scss'; // Assuming you have this SCSS file for global styles

// --- Carousel Component ---
const ProductShowcaseCarousel = () => {
  const carouselSlides = [
    {
      type: "video",
      src: "https://v.ftcdn.net/11/54/83/91/700_F_1154839121_DRiJJKcN3bGly54zb2uDY23NT5xJss6q_ST.mp4",
      captionTitle: "Exquisite Fragrances",
      captionText: "Discover a collection crafted with precision and passion.",
    },
    
    {
      type: "video",
      src: "https://v.ftcdn.net/10/58/39/88/240_F_1058398897_2lX34mBvqtAjCS2KgKwew3YNnI1Kw3k6_ST.mp4",
      captionTitle: "Floral Elegance",
      captionText: "Embrace the delicate notes of our signature floral scents.",
    },
    {
      type: "video",
      src: "https://v.ftcdn.net/14/31/40/10/240_F_1431401082_E0CfKt8PYVmEqpW5k5IifYVKiBMwiRsd_ST.mp4",
      captionTitle: "Timeless Allure",
      captionText: "Experience sophisticated aromas that leave a lasting impression.",
    },
  ];

  return (
    <section id="home" aria-label="Product Showcase Carousel">
      <Carousel data-bs-theme="dark"> {/* Using 'dark' theme for better contrast on light backgrounds */}
        {carouselSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            {slide.type === "image" ? (
              <img className="d-block w-100" src={slide.src} alt={slide.captionTitle} />
            ) : (
              <video
                className="d-block w-100"
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                aria-label={slide.captionTitle} // Added aria-label for accessibility
              >
                Your browser does not support the video tag.
              </video>
            )}
            <Carousel.Caption>
              <h3>{slide.captionTitle}</h3>
              <p>{slide.captionText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

// --- Brand Scent Page Component ---
function BrandScentPage() {
  return (
    <section id="about" aria-label="About Our Brand Scent Services">
      <div style={{ backgroundColor: '##ff9800 (orange)', padding: '60px 0' }}>
        <Container>
          {/* Section 1: Design Your Brand Scent */}
          <section style={{ marginBottom: '60px' }}>
            <Row className="align-items-center">
              <Col md={6} style={{ padding: '20px' }}>
                <img
                  src="https://purefume.in/assets/images/girl2.png"
                  alt="Perfume Bottle with Floral Background"
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                />
              </Col>
              <Col md={6} style={{ padding: '20px' }}>
                <h1 style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 'bold' }}>
                  DESIGN YOUR BRAND
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#4a2c2a', lineHeight: '1.8', marginTop: '20px' }}>
                  Purefume excels in translating your brand’s essence into a bespoke fragrance. Enrich client and staff experiences by exploring the impact of scent. Revolutionize your brand with Purefume.
                </p>
                <Button
                  style={{
                    backgroundColor: '#bfa74d',
                    color: '#fff',
                    padding: '12px 30px',
                    border: 'none',
                    borderRadius: '25px',
                    marginTop: '20px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease', // Added transition for hover effect
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#a38f3f'} // Darken on hover
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#bfa74d'} // Restore on mouse out
                >
                  SCENT YOUR BRAND
                </Button>
              </Col>
            </Row>
          </section>

          {/* Section 2: Your Story | Your Scent */}
          <section>
            <Row className="align-items-center">
              {/* Text on the Left */}
              <Col md={6} style={{ padding: '20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <img src="https://img.icons8.com/ios-filled/50/000000/sun.png" alt="Sun Icon" style={{ margin: '0 10px', width: '40px' }} />
                  <img src="https://img.icons8.com/ios-filled/50/000000/plus-math.png" alt="Plus Icon" style={{ margin: '0 10px', width: '40px' }} />
                  <img src="https://img.icons8.com/ios-filled/50/000000/leaf.png" alt="Leaf Icon" style={{ margin: '0 10px', width: '40px' }} />
                </div>
                <h1 style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif', fontSize: '2.2rem', fontWeight: 'bold' }}>
                  YOUR STORY | YOUR SCENT <br /> BE ONE-OF-A-KIND
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#4a2c2a', lineHeight: '1.8', marginTop: '20px' }}>
                  Create your personalized fragrance by blending two scents with our Perfume Customization app! Enhance your bottle with custom graphics, fonts, and a special message to create a truly unique scent experience.
                </p>
              </Col>

              {/* Image on the Right */}
              <Col md={6} style={{ padding: '20px' }}>
                <img
                  src="https://purefume.in/assets/images/bottle.png"
                  alt="Customizable Perfume Bottle"
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                />
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </section>
  );
}

// --- Product Data ---
const productsData = {
  men: [
    { id: 1, name: "Mystic Woods", price: 2500, img: "https://danielklein.in/cdn/shop/products/DKP007_1.jpg?v=1680849348&width=1024", currency: 'INR' },
    { id: 2, name: "Ocean Breeze", price: 1500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAPTwXTCyxE9QBxLeK3EF11GjKNmp0LH3uw&s", currency: 'INR' },
    { id: 3, name: "Spiced Amber", price: 2700, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2Um60YOg91fqpt5O_YhcsWHPyDbHfzLMdA&s", currency: 'INR' },
    { id: 4, name: "Bold Essence", price: 2500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Z9TdVvVRTqbzUdZTdGwylhQhJ2UHlVeAvA&s", currency: 'INR' },
    { id: 5, name: "Urban Edge", price: 1800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEGQpLTP5eCrqW0OJU_T4VvhOSYsECdIFrg&s", currency: 'INR' },
  ],
  women: [
    { id: 6, name: "Floral Whisper", price: 2799, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRxsRyVjizVh8aUD0mOYGkBXcX2UZaMCHuA&s", currency: 'INR' },
    { id: 7, name: "Sweet Serenity", price: 4499, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DBJVY00q-umE20VREpKhOpNsDIo1Pxbo-uUAVHPz3p2AFDt4UL_0iY_gYD_sQOIqeLI&usqp=CAU", currency: 'INR' },
    { id: 8, name: "Enchanting Bloom", price: 2599, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwmCZsm5M4Wc7FJ_6K_puzerLH0EUsf_f0_N1mNnAKnxQcaNm-JHE9E5RZJKXuLOSXuo&usqp=CAU", currency: 'INR' },
    { id: 9, name: "Velvet Rose", price: 1500, img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/perfume/0/i/r/30-cuddle-perfume-for-women-premium-luxury-long-lasting-original-imagrguxhc5znpfp.jpeg?q=90&crop=false", currency: 'INR' },
    { id: 10, name: "Golden Aura", price: 2299, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMzG_e31CrKd22Rs42UN4nyny9h4CwpfWblAubK9-a7W-9kpqyOVgDaNoY2R6A8CxrRQ&usqp=CAU", currency: 'INR' },
  ],
  combo: [
    { id: 11, name: "Day & Night Duo", price: 1599, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1mMyGcIFPcx3xPaEwxG8H9XQqrJEU8VQDQ&s", currency: 'INR' },
    { id: 12, name: "Traveler's Set", price: 1799, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVs_G5NBxjaj8xHhOTbJ9IiTRTSBhIRJKw&s", currency: 'INR' },
    { id: 13, name: "Luxury Collection", price:15999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-yhTiR4GrA4Kn6yl867qIlievx3cqEt76Q&s", currency: 'INR' },
    { id: 14, name: "Velvet Musk Duo", price: 1299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ewKWq5aIFewueHtizxEVZGHtFdfVY0EIpQ&s", currency: 'INR' },
    { id: 15, name: "Beirut Nights Pair", price: 1299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dJGT01mFiJorxXmCJTbtibHDJpBf3uV1Xg&s", currency: 'INR' },
  ],
  brand: [
    { id: 16, name: "Signature Collection A", price: 1599, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zewNBfPcgrg8yQTlfv_gcinksqjV6Govsw&s", currency: 'INR' },
    { id: 17, name: "Luxury Essence B", price: 1299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPln7xWZIVn4QOt8cm8Tt0Yg9LkPLEb4oL0Q&s", currency: 'INR' },
    { id: 18, name: "Classic Elixir C", price: 1299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzec7yr23FOguaXCtfmYq3E82J4uG2fRLz7w&s", currency: 'INR' },
    { id: 19, name: "Elegance Series D", price: 1599, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIaqw7LiVyY7GrRTTbyLupzG7PlIq6EzFmg&s", currency: 'INR' },
    { id: 20, name: "Prestige Blend E", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3E99uNJCy2a5lgSlyU32BVgaiiPJLXfP_w&s", price: 1499, currency:'INR' },
  ],
};

// --- ScrollRow Component ---
const ScrollRow = ({ children }) => {
  const ref = useRef();
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        overflowX: "auto",
        padding: "1rem 0",
        gap: "1rem",
        scrollbarWidth: "thin", // For Firefox
        WebkitOverflowScrolling: "touch", // For iOS Safari
        // You might want to add custom scrollbar styles in perfume.scss for cross-browser consistency
      }}
      // Added for accessibility to indicate scrollability
      role="region"
      aria-label="Scrollable row of products"
      tabIndex="0" // Makes the div focusable
    >
      {children}
    </div>
  );
};

// --- Main PerfumeStore Component ---
function PerfumeStore() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...items, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const incrementQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0).toFixed(2);

  // Consolidated Card Styles for ProductCard
  const productCardStyles = {
    card: {
      minWidth: '240px',
      flex: '0 0 auto',
      borderRadius: '15px',
      overflow: 'hidden',
      textAlign: 'center',
      position: 'relative',
      color: '#4a2c2a',
      border: 'none', // Removed explicit border, relying on shadow for definition
      boxShadow: '0 8px 20px rgba(69, 26, 26, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added box-shadow to transition
      cursor: 'pointer',
    },
    image: {
      height: '300px',
      objectFit: 'cover',
    },
    hover: {
      transform: 'translateY(-5px)', // Lift effect on hover
      boxShadow: '0 12px 25px rgba(69, 26, 26, 0.2)', // Enhanced shadow on hover
    }
  };

  const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <Card
        style={{
          ...productCardStyles.card,
          ...(isHovered ? productCardStyles.hover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Img variant="top" src={product.img} alt={product.name} style={productCardStyles.image}/>
        <Card.Body>
          <Card.Title style={{ fontSize: "1rem", fontWeight: 'bold' }}>{product.name}</Card.Title>
          <Card.Text style={{ fontSize: "1.1rem", color: '#6c757d' }}>
            ₹{product.price.toFixed(2)} {product.currency || ''} {/* Display currency if available */}
          </Card.Text>
          <Button
            size="sm"
            variant="success"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            style={{
              backgroundColor: '#bfa74d',
              borderColor: '#bfa74d',
              color: '#fff',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease, border-color 0.3s ease',
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#a38f3f'; e.currentTarget.style.borderColor = '#a38f3f'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#bfa74d'; e.currentTarget.style.borderColor = '#bfa74d'; }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <Navbar style={{ backgroundColor: '#fdf6f0'}} variant="light" expand="md" sticky="top" className="px-3 shadow-sm">
        <Navbar.Brand as={Link} to="/" style={{ color: '#4a2c2a', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Perfume Addiction
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#men" className="nav-link-custom">Men</Nav.Link>
            <Nav.Link href="#women" className="nav-link-custom">Women</Nav.Link>
            <Nav.Link href="#combo" className="nav-link-custom">Combo</Nav.Link>
            <Nav.Link href="#gift" className="nav-link-custom">Gift</Nav.Link>
            <Nav.Link as={Link} to="/signin" className="nav-link-custom">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact Us</Nav.Link>
            <Nav.Link onClick={() => setShowCart(true)} style={{ position: "relative", cursor: "pointer" }} aria-label={`View cart with ${totalQty} items`}>
              🛒
              {totalQty > 0 && (
                <Badge bg="danger" pill style={{ position: "absolute", top: 5, right: 5, fontSize: '0.7em' }}>
                  {totalQty}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <ProductShowcaseCarousel/>
      <BrandScentPage/>

      {/* Main Product Sections */}
      <Container className="my-5" style={{backgroundColor: '#fdf6f0', borderRadius: '8px', padding: '30px 0'}}>
        <section id="men" className="mb-5">
          <h2 className="text-center mb-4" style={{color:'#4a2c2a', fontFamily: 'Georgia, serif', fontWeight: 'bold'}}>DISCOVER MEN'S FRAGRANCES</h2>
          <ScrollRow>
            {productsData.men.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </ScrollRow>
        </section>

        <section id="women" className="mb-5">
          <h2 className="text-center mb-4" style={{color:'#4a2c2a', fontFamily: 'Georgia, serif', fontWeight: 'bold'}}>DISCOVER WOMEN'S FRAGRANCES</h2>
          <ScrollRow>
            {productsData.women.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </ScrollRow>
        </section>

        <section id="combo" className="mb-5">
          <h2 className="text-center mb-4" style={{color:'#4a2c2a', fontFamily: 'Georgia, serif', fontWeight: 'bold'}}>EXPLORE COMBO PACKS</h2>
          <ScrollRow>
            {productsData.combo.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </ScrollRow>
        </section>

        <section id="gift" className="mb-5">
          <h2 className="text-center mb-4" style={{color:'#4a2c2a', fontFamily: 'Georgia, serif', fontWeight: 'bold'}}>FIND THE PERFECT GIFT</h2>
          <ScrollRow>
            {productsData.brand.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </ScrollRow>
        </section>
      </Container>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={() => setShowCart(false)} size="lg" centered>
        <Modal.Header closeButton style={{ borderBottom: '1px solid #eee' }}>
          <Modal.Title style={{ color: '#4a2c2a', fontWeight: 'bold' }}>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p className="text-center text-muted">Your cart is currently empty.</p>
          ) : (
            <>
              {cartItems.map(({ id, name, price, qty, img }) => (
                <Row key={id} className="align-items-center mb-3 py-2 border-bottom">
                  <Col xs={3} md={2}>
                    <img src={img} alt={name} className="img-fluid rounded" />
                  </Col>
                  <Col xs={5} md={6}>
                    <h6 className="mb-1" style={{ color: '#4a2c2a' }}>{name}</h6>
                    <p className="mb-0 text-muted">₹{price.toFixed(2)}</p>
                  </Col>
                  <Col xs={4} md={4} className="d-flex align-items-center gap-2 justify-content-end">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => decrementQty(id)}
                      aria-label={`Decrease quantity of ${name}`}
                    >
                      −
                    </Button>
                    <span className="fw-bold">{qty}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => incrementQty(id)}
                      aria-label={`Increase quantity of ${name}`}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(id)}
                      aria-label={`Remove ${name} from cart`}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
              <hr className="my-3" />
              <h5 className="text-end" style={{ color: '#4a2c2a' }}>Total: ₹{totalPrice}</h5>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowCart(false)}>
            Continue Shopping
          </Button>
          <Button variant="success" onClick={() => alert("Payment successful! Thank you for your purchase.")} disabled={cartItems.length === 0}>
            Proceed to Payment
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

// --- Professional Footer Component ---
function Footer() {
  return (
    <footer style={{ backgroundColor: '#fdf6f0', padding: '60px 0 30px', borderTop: '1px solid #eee' }}>
      <Container>
        <Row className="justify-content-between align-items-start">
          {/* Company Info / Brand */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 style={{ color: '#4a2c2a', marginBottom: '15px', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>Perfume Addiction</h5>
            <p style={{ color: '#6c757d', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Discover your signature scent with Perfume Addiction. We offer exquisite fragrances crafted with passion and precision.
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" style={{ color: '#55acee' }}>
                <FaTwitter size={25} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel" style={{ color: '#cd201f' }}>
                <FaYoutube size={25} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" style={{ color: '#ac2bac' }}>
                <FaInstagram size={25} />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 style={{ color: '#4a2c2a', marginBottom: '15px', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Nav.Link href="#home" className="footer-link">Home</Nav.Link></li>
              <li style={{ marginBottom: '10px' }}><Nav.Link href="#about" className="footer-link">About Us</Nav.Link></li>
              <li style={{ marginBottom: '10px' }}><Nav.Link as={Link} to="/contact" className="footer-link">Contact Us</Nav.Link></li>
              <li style={{ marginBottom: '10px' }}><Nav.Link as={Link} to="/signin" className="footer-link">Sign In</Nav.Link></li>
              <li style={{ marginBottom: '10px' }}><Nav.Link href="#privacy" className="footer-link">Privacy Policy</Nav.Link></li>
              <li style={{ marginBottom: '10px' }}><Nav.Link href="#terms" className="footer-link">Terms of Service</Nav.Link></li>
            </ul>
          </Col>

          {/* Product Categories */}
          <Col md={3}>
            <h5 style={{ color: '#4a2c2a', marginBottom: '15px', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>Shop By</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Nav.Link href="#men" className="footer-link">Men's Perfumes</Nav.Link></li>
              <li style={{ marginBottom: '10px' }}><Nav.Link href="#women" className="footer-link">Women's Perfumes</Nav.Link></li>
              <li style={{ marginBottom: '10px' }}><Nav.Link href="#combo" className="footer-link">Combo Packs</Nav.Link></li>
              <li style={{ marginBottom: '10px' }}><Nav.Link href="#gift" className="footer-link">Gift Sets</Nav.Link></li>
            </ul>
          </Col>
        </Row>
        <hr style={{ borderColor: '#ddd', marginTop: '40px', marginBottom: '20px' }} />
       
      </Container>
    </footer>
  );
}

export default PerfumeStore;