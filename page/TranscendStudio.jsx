// Save this as TranscendStudio.jsx in your Vite project
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import './TranscendStudio.css'; // Move the CSS to an external file if preferred
import './index'
 function TranscendStudio() {
  const navRef = useRef(null);
  const menuBarRef = useRef(null);

  // GSAP animation
  const timeline = gsap.timeline({ paused: true });

  timeline
    .to(navRef.current, {
      top: '2%',
      duration: 0.5,
      ease: 'power2.out',
    })
    .from(
      navRef.current?.querySelectorAll('a'),
      {
        y: -50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '<'
    );

  const toggleMenu = () => {
    menuBarRef.current.classList.toggle('open');
    const isMenuOpen = menuBarRef.current.classList.contains('open');
    isMenuOpen ? timeline.play() : timeline.reverse();
  };

  return (
    <div className="transcend-studio">
      <div className="background"></div>

      <div className="logo">Logo</div>

      <div className="content">
        <h1>Hello folks, we are <br/> Transcend Studio.</h1>
        <div className="ptag">
          <p>We create stunning digital experiences <br /> that will help your business stand out.</p>
        </div>
      </div>

      <div className="about-links">
        <a href="#about">ABOUT</a>
        <div className="description">who we are</div>
        <a href="#services">SERVICES</a>
        <div className="description">what we do</div>
        <a href="#contact">CONTACT</a>
        <div className="description">get in touch</div>
      </div>

      <div
        className="menu-bar"
        onClick={toggleMenu}
        ref={menuBarRef}
      >
        ☰
      </div>

      <div className="horizontal-nav" ref={navRef}>
        <a href="#link1">Link 1</a>
        <a href="#link2">Link 2</a>
        <a href="#link3">Link 3</a>
        <a href="#link4">Link 4</a>
        <a href="#link5">Link 5</a>
      </div>

      <div className="footer">
        <div>
          <span>Follow Us:</span>
          <a style={{ marginLeft: '3%' }} href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
        <div className="scroll-down">Scroll Down ⬇️</div>
      </div>
    </div>
  );
}
export default TranscendStudio