import React, { useState } from 'react';
import Lottie from "lottie-react";
import animation from '../../assets/140022-coding.json';
import { FaArrowDown } from 'react-icons/fa';
import github from '../../assets/image/github.png'
import linkedin from '../../assets/image/linkedin.png'
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png'
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const handleDownload = () => {
        const url = 'https://drive.google.com/file/d/1vigDwlgL2FARzZQAhTCSe1K3hmLtLDCz/view?usp=drive_link';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', true);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const handleEmail = () => {
        const fromAddress = 'sarkerprasanjit379@gmail.com'
        const mailtoLink = `mailto:${fromAddress}`
        window.open(mailtoLink);
    };
    useEffect(() => {
        AOS.init({});
    }, [])


    return (
        <div className=''>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center">
                    <div data-aos=" fade-up" className='lg:w-1/2  mx-auto'>
                        <Lottie animationData={animation} loop={true} className='lg:h-[500px]' />
                    </div>
                    <div className='md:w-1/2 mx-auto font-serif md:text-left text-center'>
                        <h1 data-aos="fade-down" className="text-teal-600 md:text-5xl text-4xl font-serif">Hi,I'm Prasanjit Sarker</h1>
                        <div className='py-4  md:text-4xl text-3xl font-serif'>
                            <TypeAnimation
                                sequence={['Mern Stack Developer', 1000, 'Font-End Wev Developer', 1000]}
                                className='py-5 '
                                repeat={Infinity}
                            />
                        </div>
                        <p className="pb-6 md:text-xl text-lg pr-10">I thrive on exploring cutting-edge advancements and conquering coding challenges to pioneer innovative solutions. With high-level experience in web design and development, I produce quality work that shapes the digital landscape.</p>
                        <div data-aos="zoom-in-up" className='flex md:justify-start justify-center gap-5 pb-3'>
                            <a href="https://github.com/prasanjitsarker3" target="_blank">
                                <img src={github} alt="" srcset="" className='w-12' />
                            </a>
                            <a href="https://www.linkedin.com/in/prasanjit-sarker-49a0b7220/" target="_blank">
                                <img src={linkedin} alt="" srcset="" className='w-12' />
                            </a>
                            <a href="https://www.facebook.com/prasanjit.sarker.56" target="_blank">
                                <img src={facebook} alt="" srcset="" className='w-12' />
                            </a>
                            <a href="https://www.instagram.com/prasanjit.sarker.56/?igshid=MzNlNGNkZWQ4Mg%3D%3D&fbclid=IwAR37l9jEihpBhNGS7StKjkZkogQWsfHMP8EwFFTXIdSo75Jc8cp4xaB5_tA" target="_blank">
                                <img src={instagram} alt="" srcset="" className='w-12' />
                            </a>
                        </div>
                        <div className='flex md:justify-start justify-center gap-3'>
                            <button onClick={handleEmail} className="btn bg-gradient-to-r from-teal-400  to-teal-600 border-none md:mr-3 ">Hire Me ! </button>
                            <button onClick={handleDownload} className="btn bg-gradient-to-r from-teal-400  to-teal-600 border-none">Download Resume<FaArrowDown /></button>
                        </div>

                    </div>
                </div>
            </div>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>

            <footer className="footer footer-center p-4 md:text-2xl text-xl my-10">
                <div>
                    <p>Copyright © 2023 - All right reserved by Prasanjit Sarker</p>
                </div>
            </footer>

        </div>
    );
};

export default Home;