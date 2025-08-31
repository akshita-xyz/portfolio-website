import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><img src={navIcon3} alt="Twitter" /></a>
            </div>
            <p>My Portfolio (Made with Love)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}