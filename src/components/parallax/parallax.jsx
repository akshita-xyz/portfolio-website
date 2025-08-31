import { useEffect, useRef } from 'react';
import mountainsImg from "../../assets/img/mountains.png";
import starsImg from "../../assets/img/stars.png";

const Parallax = ({type}) => {
    const mountainsRef = useRef(null);
    const starsRef = useRef(null);
    const starsUpperRef = useRef(null);
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const parallaxElement = parallaxRef.current;
            
            if (parallaxElement) {
                const rect = parallaxElement.getBoundingClientRect();
                const yPos = -(scrolled - rect.top) * 0.5;
                
                // Parallax effect for mountains (slower)
                if (mountainsRef.current) {
                    mountainsRef.current.style.transform = `translateY(${yPos * 0.3}px)`;
                }
                
                // Parallax effect for stars (faster)
                if (starsRef.current) {
                    starsRef.current.style.transform = `translateY(${yPos * 0.6}px)`;
                }
                
                // Parallax effect for upper stars (different speed)
                if (starsUpperRef.current) {
                    starsUpperRef.current.style.transform = `translateY(${yPos * 0.4}px)`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            ref={parallaxRef}
            className="parallax" 
            style={{
                background: type==="services"
                    ?"linear-gradient(180deg, #111132, #0c0c1d)"
                    :"linear-gradient(180deg, #121212, #505064)",
                height: "100vh",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Stars Background Layer */}
            <div 
                ref={starsRef}
                className="parallax-stars"
                style={{
                    position: "absolute",
                    top: "-30%",
                    left: 0,
                    width: "100%",
                    height: "160%",
                    backgroundImage: `url(${starsImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.9,
                    zIndex: 1
                }}
            />
            
            {/* Additional Stars Layer for Upper Area */}
            <div 
                ref={starsUpperRef}
                className="parallax-stars-upper"
                style={{
                    position: "absolute",
                    top: "-50%",
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${starsImg})`,
                    backgroundSize: "200% 200%",
                    backgroundPosition: "center top",
                    backgroundRepeat: "repeat",
                    opacity: 0.7,
                    zIndex: 3
                }}
            />
            
                        {/* Mountains Foreground Layer */}
            <div 
                ref={mountainsRef}
                className="parallax-mountains"
                style={{
                    position: "absolute",
                    bottom: "-36%",
                    left: 0,
                    width: "100%",
                    height: "70%",
                    backgroundImage: `url(${mountainsImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 2
                }}
            />
            


        </div>
    )
}
export default Parallax;