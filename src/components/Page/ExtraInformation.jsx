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
                        <p>Full Stack Web Development (Programming Hero)</p>
                        <p className='py-2'>Industrial Training Program (MYWBUT)</p>
                        <p>C,C++,DSA,Problem Solving (Phitron)</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className="mx-auto shadow-lg p-3 w-fulls">
                    <h1 className='text-center text-xl font-serif py-3 text-teal-600'>Code & Development</h1>
                    <div className='w-full'>
                        <p className='text-lg'>
                            Problem solved using C,C++,Java on
                        </p>
                        <p className='py-3'>
                            <a className=' font-bold text-emerald-500 text-base' href="https://www.hackerrank.com/sarkerprasanjit1?hr_r=1"> HackerRank ||</a>
                            <a className='font-bold text-base uppercase' href="https://codeforces.com/profile/Prasanjit-Sarker">  code<span className=' text-blue-900'>forces  ||</span></a>
                            <a className='text-lg font-bold' href="https://leetcode.com/Prasanjit123/">  Leetcode</a>

                        </p>

                    </div>
                </div>
                <div data-aos="fade-up-right" className="mx-auto shadow-lg p-3">
                    <h1 className='text-center text-xl font-serif py-3 text-teal-600'>Extracurricular Activities</h1>
                    <div className='text-base md:px-0 px-5'>
                        <p>Dhrubotara Youth Development Foundation -India(Member) ||
                            Bangladesh - India Friendship Student Organization (Member)||
                            SAMARPAN: Ek soch, Ek viswas (Member)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraInformation;