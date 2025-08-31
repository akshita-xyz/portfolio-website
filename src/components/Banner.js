import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import meImg from "../assets/img/me.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ContactPopup } from "./ContactPopup";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const toRotate = useMemo(() => [ "Developer", "Learner", "Creative Thinker" ], []);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, toRotate, isDeleting, text, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, tick])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <div className="banner-content-wrapper">
              <div className="banner-text-content">
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <div className="banner-title-container">
                      <h1>{`Hi! I'm Akshita Sharma`}</h1>
                      <h1 className="banner-subtitle">
                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Learner", "Creative Thinker" ]'>
                          <span className="wrap">{text}</span>
                        </span>
                      </h1>
                    </div>
                    <p>I am a Computer Science Engineering Student who enjoys building projects that bridge creativity with functionality. 
                      Beyond coding, I’m deeply interested in exploring the world through documentaries and literature which inspire me to think critically. </p>
                    <button onClick={() => setShowContactPopup(true)}>Let's Connect <ArrowRightCircle size={20} /></button>
                  </div>}
                </TrackVisibility>
              </div>
              <div className="banner-image-content">
                <TrackVisibility>
                  {({ isVisible }) =>
                    <img 
                      src={meImg} 
                      alt="Akshita Sharma" 
                      className={`header-extreme-right-img ${isVisible ? "animate__animated animate__zoomIn" : ""}`}
                    />
                  }
                </TrackVisibility>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ContactPopup 
        show={showContactPopup} 
        handleClose={() => setShowContactPopup(false)} 
      />
    </section>
  )
}