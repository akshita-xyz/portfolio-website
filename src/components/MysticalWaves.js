import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import planetsImg from "../assets/img/planets.png";

export const MysticalWaves = () => {
  return (
    <section className="mystical-waves" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="section-header">
              <h2>PROJECTS</h2>
              <p>Made with Love (& Code ofc)</p>
            </div>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <div className="waves-container">
                  <img src={planetsImg} alt="Projects Planets" className="waves-img" />
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
