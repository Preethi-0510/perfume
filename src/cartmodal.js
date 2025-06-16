import { Modal, Button } from 'react-bootstrap';

function CartModal({ cart, onClose }) {
  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>MY CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginRight: '10px',
                }}
              />
              <div>
                <h6 style={{ margin: 0 }}>{item.title}</h6>
                <p style={{ margin: '2px 0', fontSize: '0.9rem' }}>Price: {item.price}</p>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Qty: {item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: 'center' }}>
        <Button variant="dark" onClick={onClose}>
          View Cart
        </Button>
        <Button variant="dark" onClick={onClose}>
          Proceed to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
