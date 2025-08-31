import { useState, useRef } from "react";
import meter1 from "../assets/img/meter.png";
import meter2 from "../assets/img/meter.png";
import meter3 from "../assets/img/meter.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const carouselRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(false);
  
  const handleMouseEnter = () => {
    setAutoPlay(true);
  };

  const handleMouseLeave = () => {
    setAutoPlay(false);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div 
                        className="skill-bx wow zoomIn" 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2>Skills</h2>
                        <p>These are the programming languages, tools, and frameworks I’ve worked with. <br></br>
                        They represent the foundation of my problem-solving and project-building approach.</p>
                        <Carousel 
                            ref={carouselRef}
                            responsive={responsive} 
                            infinite={true} 
                            autoPlay={autoPlay}
                            autoPlaySpeed={2000}
                            className="owl-carousel owl-theme skill-slider"
                            arrows={false}
                            showDots={false}
                            pauseOnHover={false}
                        >
                            <div className="item">
                                <img src={meter1} alt="Skill level meter" />
                                <h5>Html, Css, Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill level meter" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill level meter" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Skill level meter" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill level meter" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill level meter" />
                                <h5>React Native</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}