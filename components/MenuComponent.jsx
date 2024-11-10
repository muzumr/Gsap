// MenuComponent.jsx
import React, { useRef, useEffect } from 'react';
import './MenuComponent.css';
import { gsap } from 'gsap';

const MenuComponent = () => {
  const menuRef = useRef(null);
  const menuBarRef = useRef(null);

  // Initialize GSAP animation timeline
  const timeline = gsap.timeline({ paused: true });

  useEffect(() => {
    // Set initial opacity to 0 and position to x: -50 for the links
    gsap.set(menuRef.current.querySelectorAll('a'), { opacity: 0, x: -50 });

    // Define the GSAP animation for opening the menu
    timeline
      .to(menuRef.current, {
        top: "2%",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      })
      .to(
        menuRef.current.querySelectorAll('a'),
        {
          x: 0, // Slide from left to right
          opacity: 1,
          duration: 0.3,
          stagger: 0.1, // Stagger animation for each link
          ease: "power2.out",
        },
        "<" // Start link animation along with menu movement
      );
  }, []);

  const toggleMenu = () => {
    menuBarRef.current.classList.toggle('open');

    // Play or reverse the animation based on the menu state
    if (menuBarRef.current.classList.contains('open')) {
      timeline.play();
    } else {
      // Set opacity and x position back to initial values only when closing the menu
      gsap.to(menuRef.current.querySelectorAll('a'), { opacity: 0, x: -50, duration: 0 });
      timeline.reverse();
    }
  };

  return (
    <div>
      <div className="menu-bar text-white" onClick={toggleMenu} ref={menuBarRef}>☰</div>
      <div className="horizontal-nav" ref={menuRef}>
        <a className='hiddend' href="#link1">Link 1</a>
        <a href="#link2">Link 2</a>
        <a href="#link3">Link 3</a>
        <a href="#link4">Link 4</a>
        <a href="#link5">Link 5</a>
      </div>
    </div>
  );
};

export default MenuComponent;
