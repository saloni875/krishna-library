import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div style={{ backgroundColor: '#e0f0ff', padding: '5px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <small><FaPhoneAlt /> +91 9876543210</small>
          </Col>
          <Col xs={12} md={6} className="text-md-end mt-2 mt-md-0">
            <a href="https://wa.me/917905349414" className="mx-2 text-dark" target="_blank">
              <FaWhatsapp size={18} />
            </a>
            <a href="https://www.instagram.com/_nikhil_singh887?igsh=MXdqYzNzbnc5N3cyZQ==" className="mx-2 text-dark" target="_blank">
              <FaInstagram size={18} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;