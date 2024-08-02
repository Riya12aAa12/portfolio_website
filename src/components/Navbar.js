import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes, FaWhatsapp, FaEnvelope, FaProjectDiagram, FaBriefcase, FaCertificate, FaLaptopCode, FaAddressBook } from 'react-icons/fa';
import './NavbarStyle.css';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="header">
      <div className="logo">
        <Link to="home" spy={true} smooth={true} duration={500}>
          <div className="logo-img">
            <span className="blink">&lt;</span>
            <span>&#47;</span>RIYA<span className="blink">&gt;</span>
          </div>
        </Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaProjectDiagram className="icon" />
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaBriefcase className="icon" />
            Experience
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="certifications"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaCertificate className="icon" />
            Certifications
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaLaptopCode className="icon" />
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaAddressBook className="icon" />
            Contact
          </Link>
        </li>
      </ul>
      <div className={click ? "social-links active" : "social-links"}>
        <a
          href="https://www.linkedin.com/in/riya-kumari-202930221/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social" size={30} />
        </a>
        <a
          href="https://github.com/Riya12aAa12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social" size={30} />
        </a>
        <a
          href="https://www.instagram.com/riyajha936/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social" size={30} />
        </a>
        <a
          href="https://wa.me/9771122910" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="social" size={30} />
        </a>
        <a
          href="mailto:rk9709236856@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="social" size={30} />
        </a>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes className="bars" size={30} />
        ) : (
          <FaBars className="bars" size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}
