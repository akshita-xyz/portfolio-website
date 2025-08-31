import { useState } from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const ContactPopup = ({ show, handleClose }) => {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="contact-popup">
      <Modal.Header closeButton className="contact-popup-header">
        <Modal.Title className="contact-popup-title">Let's Connect! </Modal.Title>
      </Modal.Header>
      <Modal.Body className="contact-popup-body">
        <Container>
          <Row className="contact-info">
            <Col xs={12} className="contact-item">
              <div className="contact-label">📧 Email</div>
              <div className="contact-value">
                <span>akshita8793@gmail.com</span>
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  onClick={() => copyToClipboard('akshita8793@gmail.com', 'email')}
                  className="copy-btn"
                >
                  {copied === 'email' ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </Col>
            
            <Col xs={12} className="contact-item">
              <div className="contact-label">📱 Phone</div>
              <div className="contact-value">
                <span>+91 8427032781</span>
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  onClick={() => copyToClipboard('+918427032781', 'phone')}
                  className="copy-btn"
                >
                  {copied === 'phone' ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </Col>

            <Col xs={12} className="social-links-section">
              <div className="contact-label">🌐 Social Media</div>
              <div className="social-buttons">
                <a 
                  href="https://www.linkedin.com/in/akshita-sharma1234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/akshita-xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn github"
                >
                  <img src={navIcon2} alt="GitHub" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/akshita_shhh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn instagram"
                >
                  <img src={navIcon3} alt="Instagram" />
                  <span>Instagram</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
