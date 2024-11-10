import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Loader.css'

const Loader = () => {
  useEffect(() => {
    // GSAP Animation
    const ctx = gsap.context(() => {
      gsap.to("#yellow1", {
        x: 100,
        duration: 2,
        repeat: -1,
        yoyo: true,
      });
      gsap.from(".yellow2", {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5,
      });
      gsap.to(".loader h1", {
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".loader", {
        opacity: 0,
        duration: 1,
        delay: 2.5,
        onComplete: () => {
          document.querySelector(".loader").style.display = "none";
        }
      });
    });
    
    return () => ctx.revert(); // Clean up animation on component unmount
  }, []);

  return (
    <div className="loader">
      <div id="yellow1" className="yellow">
        Loading...
      </div>
      <div className="yellow2">
        Please wait
      </div>
      <h1>Loading Application</h1>
    </div>
  );
};

export default Loader;
