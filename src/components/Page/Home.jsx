import React from 'react';
import Lottie from "lottie-react";
import animation from '../../assets/140022-coding.json';
import { FaArrowDown } from 'react-icons/fa';
import github from '../../assets/image/github.png'
import linkedin from '../../assets/image/linkedin.png'
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png'
import About from './About'; 
import ExtraInformation from './ExtraInformation';
import Skill from './Skill';
import Projects from './Projects';
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
        const emailAddress = 'sarkerprasanjit379@gmail.com'; 
        const subject = 'Subject Here...';
    
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoLink);
      };
    return ( 
        <div className=''>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center">
                    <div className='lg:w-1/2  mx-auto'>
                        <Lottie animationData={animation} loop={true} className='lg:h-[500px]' />
                    </div>
                    <div className='md:w-1/2 mx-auto font-serif md:text-left text-center'>
                        <h1 className="md:text-5xl text-4xl font-serif">Prasanjit Sarker</h1>
                        <h1 className='py-5 md:text-4xl text-3xl font-serif' >Mern Stack Developer</h1>
                        <p className="pb-6 text-xl pr-10">I'm driven by exploring cutting-edge advancements, conquering coding challenges, and pioneering innovative solutions that shape the digital landscape.High Level Experience in web design and development knowledge producing quality work.</p>
                        <div className='flex md:justify-start justify-center gap-5 pb-3'>
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
                            <button onClick={handleEmail} className="btn btn-primary md:mr-3 ">Hire Me ! </button>
                            <button onClick={handleDownload} className="btn btn-primary">Download Resume<FaArrowDown/></button>
                        </div>

                    </div>
                </div>
            </div> 
            <About></About> 
            <ExtraInformation></ExtraInformation>
            <Skill></Skill>
            <Projects></Projects>
        </div>
    );
};

export default Home;