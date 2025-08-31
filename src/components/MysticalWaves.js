import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import planetsImg from "../assets/img/planets.png";
import omniworldLogo from "../assets/img/omniworld logo.png";

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
                <div className="projects-showcase">
                  <div className="waves-container">
                    <img src={planetsImg} alt="Projects Planets" className="waves-img" />
                    
                    <div className="project-logos-overlay">
                      <a 
                        href="https://omniworld.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link omniworld-link"
                      >
                        <img 
                          src={omniworldLogo} 
                          alt="Omniworld" 
                          className="project-logo omniworld-logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
