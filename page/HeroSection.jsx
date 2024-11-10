import React, { useEffect } from 'react';
import './HeroSection.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
    useEffect(() => {
        // Initial setup for zoom-out effect for the hero section
        gsap.to(".hero", {
            scale: 0.4,
            duration: 4,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom center",
                scrub: true,
                pin: true
            }
        });

        gsap.from(".content, .ptag", {
            x: '-100%',
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            delay: 1
        });

        gsap.from(".tag, .description", {
            x: '100%',
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            delay: 1
        });

        // Initialize the GSAP timeline for the animation with paused state
        const timeline = gsap.timeline({ paused: true });

        // Define the animation for the links with stagger effect
        timeline.to(".horizontal-nav", {
            top: "2%",
            duration: 0.5,
            ease: "power2.out",
        }).from(".horizontal-nav a", {
            y: -50,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out"
        });

        // Function to toggle the menu
        const toggleMenu = () => {
            const menuBar = document.querySelector(".menu-bar");
            menuBar.classList.toggle("open");

            // Check if the menu is already open and play or reverse the timeline
            if (menuBar.classList.contains("open")) {
                timeline.play();
            } else {
                timeline.reverse();
            }
        };

        // Adding event listener for menu toggle
        document.querySelector('.menu-bar').addEventListener('click', toggleMenu);

        return () => {
            document.querySelector('.menu-bar').removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="background"></div>
                <div className="logo">Logo</div>
                <div className="content">
                    <h1>Hello folks, we are Transcend <span style={{ color: '#1b78d2' }}>Studio</span>.</h1>
                    <div className="ptag">
                        <p>We create stunning digital <span style={{ color: '#000000' }}>experiences</span> <br /> that will help your business stand out.</p>
                    </div>
                </div>
                <div className="about-links">
                    <a className="tag" href="#about">ABOUT</a>
                    <div className="description">who we are</div>
                    <a className="tag" href="#services">SERVICES</a>
                    <div className="description">what we do</div>
                    <a className="tag" href="#contact">CONTACT</a>
                    <div className="description">get in touch</div>
                </div>
                <div className="menu-bar">☰</div>
                <div className="horizontal-nav" id="horizontalNav">
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
                    <div style={{ position: 'relative' }}>
                        <div className="scroll-down">Scroll Down ⬇️</div>
                    </div>
                </div>
            </div>
            <div className="div h-[100vh]"></div>
        </section>
    );
}

export default HeroSection;
