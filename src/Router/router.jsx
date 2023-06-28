import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../components/Page/Home';
import About from '../components/Page/About';
import Projects from '../components/Page/Projects';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
            , {
                path: 'about',
                element: <About></About>
            }
            ,
            {
                path:'project',
                element:<Projects></Projects>
            }
        ]
    }
])

export default router;