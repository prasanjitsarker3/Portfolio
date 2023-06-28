import React from 'react';

const ExtraInformation = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl font-serif '>Extra Information About Career</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className="div">
                    <h1>First Div</h1>
                </div>
                <div className="div">
                    <h1>Second Div</h1>
                </div>
                <div className="div">
                    <h1>Third Div</h1>
                </div>
            </div>
        </div>
    );
};

export default ExtraInformation;