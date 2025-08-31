import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akshita-sharma1234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/akshita-xyz" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://www.instagram.com/akshita_shhh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>My Portfolio (Made with Love) <br></br>      .</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}