import React from 'react';
import photo from '../../Icon/aboutPhoto.jpg';
import img from '../../assets/image/dp-removebg (1).png'

const About = () => {
    return (
        <div id='about-page' className="py-7 w-[85%] mx-auto">
            <div>
                <h1 className='text-center text-4xl italic font-serif  '>About </h1>
                <hr className='w-[130px] mx-auto border-2 border-emerald-700' />
            </div>

            <div className='grid md:grid-cols-2 gap-4'>
                <div className='flex justify-center items-center py-7'>
                    {/* <img src={photo} alt="" srcset="" className=' rounded-full' /> */}
                    <img className="lg:w-full mask mask-hexagon bg-emerald-400" src={img} />
                </div>
                <div className='pt-5 mx-auto'>
                    <p className=' p-3 font-serif text-lg'>
                        Literature to tech, I'm a passionate learner and educator. JavaScript developer focused on full stack web development, aspiring to become a dynamic English faculty
                    </p>

                    <div className='px-3'>
                        <h1 className=' text-lg font-serif'>Education Background.</h1>
                        <h1 className='text-emerald-700 text-xl'>B Tech in Information Technology</h1>
                        <p className='text-xl font-bold'>Haldia Institute of Technology, WB-India</p>
                        {/* <li>I am a self taught developer and programmer .I solves programming problems based on data structures on many platforms.</li> */}
                        <li className='py-1'>Adept in key IT skills - Java, C++, C, database management, and web development - empowering me to create robust solutions and drive technological excellence</li>
                        <li>With strong analytical and problem-solving skills, I excel in identifying and resolving complex technical issues, delivering innovative solutions for software and hardware challenges in IT.</li>
                    </div>
                    <div className='px-3'>
                        <h3 className='text-xl py-2 text-emerald-700 font-bold'>Final Year Project</h3>

                        <div className=''>
                            <p className='text-xl'>Twitter Sentiment Analysis || Python</p>
                            <p className='text-xl'>Doctor Management System || MERN</p>
                            

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;