// BackButton.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      console.log("Current Scroll Position:", currentScrollTop);
      console.log("Last Scroll Position:", lastScrollTop);

      if (currentScrollTop < lastScrollTop) {
        setVisible(true); // Show the button when scrolling up
        console.log("Scrolling up - Button should be visible");
      } else {
        setVisible(false); // Hide the button when scrolling down
        console.log("Scrolling down - Button should be hidden");
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scrolling values
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div
      className={`fixed top-5 right-5 transition-transform duration-300 ease-in-out z-50 bg-white ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-[-100%] opacity-0'
      }`}
    >
      <button
        onClick={handleBackClick}
        className="px-4 py-2 text-white bg-black rounded shadow-lg"
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
