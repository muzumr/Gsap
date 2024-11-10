import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Preload } from '@react-three/drei';
import MenuComponent from './MenuComponent';
import gsap from 'gsap';
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { SiFiverr } from "react-icons/si";
const Model = () => {
    const gltf = useLoader(GLTFLoader, '/desktop_pc/scene.gltf');
    const modelRef = useRef();

    useEffect(() => {
        if (gltf) {
            console.log("GLTF model loaded:", gltf);
        }
    }, [gltf]);

    // useFrame(({ mouse }) => {
    //     if (modelRef.current) {
    //         const targetRotationX = (mouse.y * Math.PI) / 10;
    //         const targetRotationY = (mouse.x * Math.PI) / 5;

    //         modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.05;
    //         modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.05;
    //     }
    // });

    return (
        <primitive
            object={gltf.scene}
            ref={modelRef}
            scale={[0.75, 0.75, 0.75]}
            position={[0, -1, 0]}
        />
    );
};

const LandingPage = () => {
    return (
        <div className="parent min-h-[100vh] w-full bg-[#333] overflow-x-hidden text-white">
            <div className="navBar h-[7vh] w-full bg-[#333] flex justify-between pl-4 pr-6 items-center">
                <div className="logo">
                    <img className='bg-black h-[12vh] bg-transparent boder-none absolute top-[5px] left-[10px] ' src="./fbLogo.png" alt="logo" />
                </div>
                <div className="bar">
                    <MenuComponent/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center try">
                <div className="w-full lg:w-[50vw] px-4 lg:px-0 bg-[#333]" ref={el => {
                    gsap.fromTo(el,
                        {x: '-100%'},
                        {
                            x: 0,
                            duration: 1,
                            ease: 'power3.out'
                        }
                    );
                    gsap.fromTo(el.children,
                        {
                            opacity: 0,
                            y: 50
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            stagger: 0.2,
                            ease: 'power3.out',
                            delay: 0.5
                        }
                    );
                }}>
                    <h1 className='mt-20 lg:mt-[30vh] font-sans text-white text-4xl lg:text-[4vw] text-center tracking-tighter font-bold'>DREAM STREAM TECH.</h1>
                    <p className='text-center text-white w-full lg:w-[30vw] mx-auto lg:ml-[7.5vw] font-light px-4 lg:px-0 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem excepturi soluta quas recusandae non provident distinctio! Impedit molestias in eveniet?</p>
                    <button className='border-[1px] border-white block mx-auto lg:ml-[39%] mt-6 rounded-lg p-2 text-white hover:bg-white hover:text-[#333] transition-colors'>Contact Now</button>
                </div>
                <div className="w-full lg:w-[60vw] h-[50vh] lg:h-[90vh]" ref={el => {
                    gsap.fromTo(el,
                        {x: '-100%'},
                        {
                            x: 0,
                            duration: 1,
                            ease: 'power3.out'
                        }
                    );
                }}>
                    <Canvas 
                        camera={{ position: [6, 3, -3], fov: 80 }}
                        style={{ background: '#333', cursor: "grab" }}
                    >
                        <ambientLight intensity={1.0} />
                        <directionalLight position={[5, 5, 5]} intensity={1.0} />
                        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
                        <Model />
                        <OrbitControls 
                            enableZoom={true}
                            minDistance={2}
                            maxDistance={10}
                            target={[0, 0, 0]}
                        />
                        <Preload all />
                    </Canvas>
                </div>
            </div>
            <div className="footer   w-full h-[3vh] text-white flex justify-center item-center gap-5 ">
                <div className="  flex justify-center item-center gap-5">
                    <a className='ml-[5px]  font-bold  w-full  hover:text-red-500' href=""><FaFacebookMessenger /></a>
                    <a className='ml-[5px] hover:text-red-500' href=""><IoLogoInstagram /></a>
                    <a className='ml-[5px] hover:text-red-500' href=""><CiLinkedin /></a>
                    <a className='ml-[5px] hover:text-red-500' href=""><SiFiverr /></a>
                    

                </div>
            </div>
        </div>
    );
};

export default LandingPage;
