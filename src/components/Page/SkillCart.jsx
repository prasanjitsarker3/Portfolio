import React from 'react';

const SkillCart = ({ skill }) => {
    const { name, value } = skill;
    return (
        <div className='rounded shadow-lg p-5'>
            <div className=' text-2xl font-serif flex justify-around'>
                <h1>{name}</h1>
                <h1>{value} %</h1>
            </div>
            <div>
                <progress className="progress progress-success w-full mx-auto px-10" value={value} max="100"></progress>
            </div>
        </div>
    );
};

export default SkillCart;