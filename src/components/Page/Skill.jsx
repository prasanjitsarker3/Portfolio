import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import SkillCart from './SkillCart';

const Skill = () => {
    const [skillData, setSkillData] = useState([]);
    useEffect(() => {
        fetch("skills.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSkillData(data)
            })
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-3xl py-10 text-center font-bold '>My Skills</h1>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    skillData.map(skill => <SkillCart
                        skill={skill} key={skill.id}
                    ></SkillCart>)
                }
            </div>

        </div>
    );
};

export default Skill;