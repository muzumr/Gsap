import React from 'react';
import './GridComponent.css'; // Assuming you create a CSS file for custom styles

const GridComponent = () => {
  return (
    <>
   <div className="parent relative" >
    <div className="grid-container ">
      <div className="grid-item item1">Item 1</div>
      <div className="grid-item item2">Item 2</div>
      <div className="grid-item item3">
        <img
          className="responsive-img"
          src="./cyber-security-experts-working-with-tech-devices-neon-lights (1).jpg"
          alt="Cyber Security"
        />
      </div>
      <div className="grid-item item4">Item 4</div>
      <div className="grid-item item5">
        <img
          className="responsive-img"
          src="./view-brain-with-circuit-board (2).jpg"
          alt="Brain Circuit"
        />
      </div>
      <div className="grid-item item6">Item 6</div>
      
      <div className="grid-item">
        <img
          className="responsive-img"
          src="./3d-rendering-futuristic-computer (1).jpg"
          alt="Futuristic Computer"
        />
      </div>
    </div>
    </div>
    </>
  );
};

export default GridComponent;
