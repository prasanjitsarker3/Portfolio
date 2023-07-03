import React from 'react';
import TabCart from './TabCart';

const ProjectTab = ({project}) => {
    // console.log(project);
    // const {name}=project;
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-7 py-5'>
                {
                    project.map(item=> <TabCart 
                        project={item} key={item.id}
                    ></TabCart>)
                }
            </div>
        </div> 
    );
};

export default ProjectTab;