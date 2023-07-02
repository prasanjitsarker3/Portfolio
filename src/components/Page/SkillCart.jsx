import React from 'react';

const SkillCart = ({ skill }) => {
    const { name, value } = skill;
    return (
        <div data-aos="zoom-in" className='rounded shadow-lg p-5'>
            <div className='  font-sans flex justify-around items-center'>
                <h1 className='text-teal-600 text-2xl'>{name}</h1>
                <div className="radial-progress text-teal-600 text-xl" style={{ "--value": `${value}`, "--size": "6rem", "--thickness": "1rem" }}>
                    <h1> {value}%</h1>
                </div>
            </div>
            <div>
                {/* <progress className="progress progress-success w-full mx-auto px-10" value={value} max="100"></progress> */}

            </div>
        </div>
    );
};

export default SkillCart;