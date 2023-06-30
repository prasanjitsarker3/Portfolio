import React from 'react';

const Projects = () => {
    return ( 
        <div>
            <div>
                <h1 className='text-3xl text-center py-7'>Portfolio</h1>
            </div>
            <div>
                <div className="tabs tabs-boxed flex justify-center">
                    <a className="tab">Tab 1</a>
                    <a className="tab tab-active">Tab 2</a>
                    <a className="tab">Tab 3</a> 
                </div>
            </div>
        </div>
    );
};

export default Projects;