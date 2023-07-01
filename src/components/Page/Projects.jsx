import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectTab from './ProjectTab';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const categories = ['javascript', 'react', 'mern']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category) > -1 ? categories.indexOf(category) : 2;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const javascript = projects.filter(project => project.category === "javascript");
    const react = projects.filter(project => project.category === "react");
    const mern = projects.filter(project => project.category === "mern");

    return (
        <div>
            <div>
                <h1 className='text-3xl text-center py-7'>Portfolio</h1>
            </div>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center gap-2 py-5 text-lg font-serif cursor-pointer">
                        <Tab className="bg-teal-600 rounded pt-1 p-2 text-white border">JavaScript</Tab>
                        <Tab className="bg-teal-600 rounded pt-1 p-2 text-white border">React Js</Tab>
                        <Tab className="bg-teal-600 rounded pt-1 p-2 text-white border!">Mern Stack</Tab>
                    </TabList>
                    <TabPanel>
                        <ProjectTab project={javascript}></ProjectTab>
                    </TabPanel>
                    <TabPanel>
                        <ProjectTab project={react}></ProjectTab>
                    </TabPanel>
                    <TabPanel>
                        <ProjectTab project={mern}></ProjectTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Projects;