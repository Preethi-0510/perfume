import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa'; // Cart icon
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar({ cartItems, onCartClick }) {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#D4A373' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Perfume Addiction
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Left navigation links */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#combo">Combo</Nav.Link>
            <Nav.Link href="#">Gift</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

          {/* Right side Cart */}
        <Nav.Link href="#" onClick={onCartClick} style={{ color: '#fff', position: 'relative' }}>
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge bg="warning" text="dark" pill style={{ position: 'absolute', top: '-5px', right: '-10px' }}>
                  {cartCount}
                </Badge>
                 )}
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;