
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const allTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', allTheme);
    }, [theme])
    const themehandle = n => {
        if (n.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    //px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8

    const options = <>
        <li></li>
        <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>About</NavLink>
        </li>

        <li><NavLink to='/skill' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Skill</NavLink>
        </li>
        <li>
            <NavLink to='/project' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Project</NavLink>
        </li>
        <li>
            <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input style={{ display: 'none' }} onClick={themehandle} type="checkbox" className="toggle toggle-md text-white !" checked={theme === 'light' ? false : true} />

                {/* sun icon */}
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                {/* moon icon */}
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>

        </li>
    </>
    return (
        <div className='bg-base-100 lg:px-6 py-5 md:px-14 px-4 z-50 sticky top-0'>
            <div className='relative flex items-center justify-between  '>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    {/* <BoltIcon className='h-6 w-6 text-blue-500' /> */}

                    <span className='ml-2 text-2xl font-bold tracking-wide '>
                        Prasanjit <span className='text-emerald-500'>Sarker</span>
                    </span>
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center font-bold hidden space-x-8 lg:flex'>
                    {options}

                </ul>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-8 font-bold' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10  font-bold'>
                            <div className='p-3 bg-base-100   font-bold border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-2'>

                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-8 ' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav className='flex justify-center'>
                                    <ul className='space-y-1 flex justify-between gap-5 items-center'>
                                        {options}

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;