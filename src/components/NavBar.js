import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ContactPopup } from "./ContactPopup";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akshita-sharma1234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/akshita-xyz" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://www.instagram.com/akshita_shhh/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><img src={navIcon3} alt="Twitter" /></a>
            </div>
            <button className="vvd" onClick={() => setShowContactPopup(true)}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
      <ContactPopup 
        show={showContactPopup} 
        handleClose={() => setShowContactPopup(false)} 
      />
    </Navbar>
  )
}