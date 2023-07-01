import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        setIsDarkMode(savedMode === 'true');
    }, []);

    const toggleDarkMode = () => {
        const updatedMode = !isDarkMode;
        setIsDarkMode(updatedMode);
        localStorage.setItem('darkMode', updatedMode);
    };

    return (
        <label className="swap swap-rotate" onClick={toggleDarkMode}>
            <input type="checkbox" checked={isDarkMode} readOnly />
            <svg
                className={`swap-on fill-current w-10 h-10 ${isDarkMode ? 'hidden' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                
            </svg>
            <svg
                className={`swap-off fill-current w-10 h-10 ${isDarkMode ? '' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
               
            </svg>
        </label>
    );
};

export default DarkModeToggle;
