import React from 'react';

const ExtraInformation = () => {
    return (
        <div>
            <div className='text-center py-10 text-teal-600'>
                <h1 className='text-3xl font-serif '>Extra Information Daily Goal</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                <div data-aos="fade-up-right" className="mx-auto   shadow-lg p-3"> 
                    <h1 className='text-center text-xl font-serif py-3 text-teal-600'>Relevant Course</h1>
                    <div className=''>
                        <li>Full Stack Web Development || Programming Hero</li>
                        <li className='py-3'>Industrial Training Program on Python,DSA,DMS || MYWBUT</li>
                        <li>C,C++,DSA,Problem Solving || Phitron</li>
                    </div>
                </div>
                <div data-aos="zoom-in" className=" shadow-lg p-3">
                    <h1 className='text-center text-xl font-serif py-3 text-teal-600'>Code & Development</h1>
                    <div>
                        <li>
                            Problem solved using C,C++,Java on
                            <a className=' font-bold text-emerald-500 text-lg' href="https://www.hackerrank.com/sarkerprasanjit1?hr_r=1"> HackerRank</a>
                        </li>
                        <li className='py-3'>
                            Problem solved using C++,DSA on
                            <a className='font-bold text-lg uppercase' href="https://codeforces.com/profile/Prasanjit-Sarker">  code<span className=' text-blue-900'>forces</span></a>
                        </li>
                        <li>
                            Math problem solved on
                            <a className='text-lg font-bold' href="https://leetcode.com/Prasanjit123/">  Leetcode</a>
                        </li>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="mx-auto shadow-lg p-3">
                    <h1 className='text-center text-xl font-serif py-3 text-teal-600'>Extracurricular Activities</h1>
                    <div>
                        <li>Dhrubotara Youth Development Foundation - India (Member)</li>
                        <li className='py-3'>Bangladesh - India Friendship Student Organization (Member)</li>
                        <li>SAMARPAN: Ek soch, Ek viswas (Member)</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraInformation;