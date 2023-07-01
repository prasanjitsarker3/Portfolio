
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8

    const options = <>
        <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>About</NavLink>
        </li>
        <li><Link to='/skill' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>Skill</Link>
        </li>
        <li>
            <NavLink to='/project' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Project</NavLink>
        </li>
    </>
    return (
        <div className='bg-base-100 lg:px-6 py-5 md:px-14 px-4 z-50 sticky top-0'>
            <div className='relative flex items-center justify-between  '>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    {/* <BoltIcon className='h-6 w-6 text-blue-500' /> */}

                    <span className='ml-2 text-2xl font-bold tracking-wide text-gray-800'>
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
                        <Bars3BottomRightIcon className='w-5 text-black font-bold' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10 text-black font-bold'>
                            <div className='p-5 bg-base-100  text-black font-bold border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                   
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-black' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
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