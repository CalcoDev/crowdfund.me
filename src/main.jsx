import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home.page.jsx'
import About from './pages/about/about.page.jsx'
import Offers from './pages/offers/offers.page.jsx'
import Contact from './pages/contact/contact.page.jsx'

import './animations.css'
import './index.css'
import AnimationLoader from './managers/animation-loader/animation-loader.manager.jsx'

const paths = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/offers', element: <Offers /> },
    { path: '/contact', element: <Contact /> },
]

const router = createBrowserRouter(paths)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={router} />
    </>
)
