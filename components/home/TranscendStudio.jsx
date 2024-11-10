import React, { useEffect } from 'react';
import gsap from 'gsap';
import './TranscendStudio.css';

const TranscendStudio = () => {
  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });
    timeline.to('.horizontal-nav', {
      top: '2%',
      duration: 0.5,
      ease: 'power2.out',
    }).from('.horizontal-nav a', {
      y: -50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: 'power2.out',
    });
    
    const toggleMenu = () => {
      const menuBar = document.querySelector('.menu-bar');
      menuBar.classList.toggle('open');
      if (menuBar.classList.contains('open')) {
        timeline.play();
      } else {
        timeline.reverse();
      }
    };

    document.querySelector('.menu-bar').addEventListener('click', toggleMenu);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden text-white">
      <div className="background"></div>
      <div className="absolute text-2xl text-pink-500 logo top-5 left-5">Logo</div>
      
      <div className="content absolute top-1/2 left-[29vw] transform -translate-x-1/2 -translate-y-1/2 text-center min-w-[300px] sm:min-w-[600px] ">
        <h1 className="text-[5vw] font-semibold sm:text-[5vw]">Hello folks, we are <br/> Transcend <span className='text-blue-700'>Studio.</span> </h1>
        <div className="mt-4 ptag">
          <p className="text-lg sm:text-[1.9vw] leading-loose text-gray-300 relative">
            We create stunning digital experiences <br /> that will help your business stand out.
        
          </p>
        </div>
      </div>

      <div className="about-links absolute top-1/4 right-0 w-1/3 sm:w-1/4 lg:w-[13vw] h-[41vh] text-left pr-2 ">
        {['ABOUT', 'SERVICES', 'CONTACT'].map((text, index) => (
          <React.Fragment key={text}>
            <a href={`#${text.toLowerCase()}`} className="flex items-center justify-start px-3 py-2 my-2 text-lg no-underline transition duration-300 rounded-lg bg-white/10 hover:bg-white/30">
              {text}
            </a>
            <div className="description text-gray-300 text-sm ml-3 relative mt-[-0.25rem] mb-4">
              {index === 0 ? 'who we are' : index === 1 ? 'what we do' : 'Get in touch'}
              
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="absolute z-10 text-2xl cursor-pointer menu-bar top-5 right-5">☰</div>

      <div className="horizontal-nav fixed top-[-30%] right-4 w-[60vw] sm:w-[30%] h-16 bg-gray-300/80 flex items-center pl-5 transition-all duration-300">
        {['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'].map(link => (
          <a key={link} href={`#${link.replace(' ', '').toLowerCase()}`} className="mb-2 mr-4 text-lg text-pink-500 no-underline transition duration-300 hover:text-white">{link}</a>
        ))}
      </div>

      <div className="footer absolute bottom-5 left-5 text-sm bg-white/10 px-3 py-2 rounded-lg w-[95vw] text-center">
      <span className="block w-[9%] h-[2px] bg-white  mx-auto "></span>
        {['Facebook', 'Twitter', 'LinkedIn'].map(platform => (
          <a key={platform} href={`#${platform.toLowerCase()}`} className="mr-3 text-white no-underline transition duration-300 hover:text-black">
            {platform}
          </a>
        ))}
        <div className="absolute text-xs text-center cursor-pointer scroll-down bottom-2 right-5">  Scroll Down ⬇️</div>
      </div>
    </div>
  );
};

export default TranscendStudio;
