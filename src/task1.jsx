import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BrandScentPage() {
  return (
    <section id="about">
    <div style={{ backgroundColor: '#fdf6f0', padding: '60px 0' }}>
      <Container>

        {/* Section 1: Design Your Brand Scent */}
        <section style={{ marginBottom: '60px' }}>
          <Row className="align-items-center">
            <Col md={6} style={{ padding: '20px' }}>
              <img
                src="https://purefume.in/assets/images/girl2.png"
                alt="Perfume Bottle"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
              />
            </Col>
            <Col md={6} style={{ padding: '20px' }}>
              <h1 style={{ color: '#4a2c2a', fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 'bold' }}>
                DESIGN YOUR BRAND SCENT
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#4a2c2a', lineHeight: '1.8', marginTop: '20px' }}>
                Purefume excels in translating your brand’s essence into a bespoke fragrance. Enrich client and staff experiences by exploring the impact of scent. Revolutionize your brand with Purefume.
              </p>
              <button style={{
                backgroundColor: '#bfa74d',
                color: '#fff',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '25px',
                marginTop: '20px',
                fontSize: '1rem',
                cursor: 'pointer'
              }}>
                SCENT YOUR BRAND
              </button>
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
                alt="Natural Ingredients"
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



export default BrandScentPage;

