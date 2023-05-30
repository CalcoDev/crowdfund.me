import { useState } from 'react'

import Logo from './assets/logo.svg'
import BurgerMenu from './assets/burger-menu.svg'
import NavLink from './nav-link/nav-link.component'
import { Link } from 'react-router-dom'

const navLinks = [
    {
        title: 'HOME',
        imgSrc: '/links/home.png',
        link: '/',
    },
    {
        title: 'ABOUT',
        imgSrc: '/links/about.png',
        link: '/about',
    },
    {
        title: 'OFFERS',
        imgSrc: '/links/offers.png',
        link: '/offers',
    },
    {
        title: 'CONTACT',
        imgSrc: '/links/contact.png',
        link: '/contact',
    },
]

const socials = [
    // {
    //     title: 'Facebook',
    //     imgSrc: '/icons/facebook.svg',
    //     link: '/',
    // },
    {
        title: 'Instagram',
        imgSrc: '/icons/instagram.svg',
        link: '/',
    },
    // {
    //     title: 'Twitter',
    //     imgSrc: '/icons/twitter.svg',
    //     link: '/',
    // },
]

const Navigation = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className={`${className} z-20 fixed w-full bg-cfm-light-grey`}>
            <nav className="h-[8vh] grid grid-cols-5 gap-2 items-center z-20">
                <div className="col-start-2 flex items-center">
                    <img className="h-[1.5em] mr-4" src={Logo} alt="logo" />
                    <Link
                        to="/"
                        className="
                            font-cfm-spartan font-extralight 
                            text-cfm-white text-center text-base
                            tracking-cfm-1 indent-cfm-1
                        "
                    >
                        CROWDFUND.ME
                    </Link>
                </div>

                <img
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="
                        col-start-4 justify-self-end h-[1.5em]
                        transition duration-300 ease-in-out
                        
                        hover:cursor-pointer
                        hover:scale-110
            
                        active:scale-90
                    "
                    src={BurgerMenu}
                    alt="burger-menu"
                />
            </nav>

            <div
                className={`
                    absolute top-[8vh] bg-cfm-light-grey w-full z-10 grid grid-cols-5 gap-2
                    transition duration-300 ease-in-out
                    
                    h-[92vh]
                    origin-top
                    ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'}
                `}
            >
                <div className="col-start-2 col-span-3 flex flex-col">
                    <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 py-8">
                        {navLinks.map(({ title, imgSrc, link }, i) => (
                            <NavLink
                                title={title}
                                imgSrc={imgSrc}
                                link={link}
                                key={i}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ))}
                    </div>
                    <footer className="h-[8vh] pb-8 flex flex-col items-center justify-around">
                        <div className="mb-4 flex justify-center items-center">
                            {socials.map(({ title, imgSrc, link }, i) => (
                                <a
                                    href={link}
                                    className="h-[1.5em] mr-4 hover:scale-150 active:scale-90 
                                    transition duration-300 ease-in-out"
                                    key={i}
                                >
                                    <img
                                        className="h-full w-full"
                                        src={imgSrc}
                                        alt={title}
                                    />
                                </a>
                            ))}
                        </div>
                        <h1
                            className="
                                    font-cfm-spartan font-extralight 
                                    text-cfm-white text-center text-xs
                                    tracking-cfm-1 indent-cfm-1
                                "
                        >
                            COPYRIGHT @CROWDFUND.ME 2023
                        </h1>
                    </footer>
                </div>
            </div>

            {/* {isMenuOpen && (
                <div className="absolute top-[8vh] bg-cfm-light-grey w-full h-[92vh] z-10 grid grid-cols-5 gap-2">
                    <div className="col-start-2 col-span-3 flex flex-col pt-[8vh]">
                        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 py-8">
                            {navLinks.map(({ title, imgSrc, link }, i) => (
                                <NavLink
                                    title={title}
                                    imgSrc={imgSrc}
                                    link={link}
                                    key={i}
                                />
                            ))}
                        </div>
                        <footer className="h-[8vh] pb-8 flex flex-col items-center justify-around">
                            <div className="mb-4 flex justify-center items-center">
                                {socials.map(({ title, imgSrc, link }, i) => (
                                    <a
                                        href={link}
                                        className="h-[1.5em] mr-4 hover:scale-150 active:scale-90 
                                    transition duration-300 ease-in-out"
                                    >
                                        <img
                                            className="h-full w-full"
                                            src={imgSrc}
                                            alt={title}
                                            key={i}
                                        />
                                    </a>
                                ))}
                            </div>
                            <h1
                                className="
                                    font-cfm-spartan font-extralight 
                                    text-cfm-white text-center text-xs
                                    tracking-cfm-1 indent-cfm-1
                                "
                            >
                                COPYRIGHT @CROWDFUND.ME 2023
                            </h1>
                        </footer>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default Navigation
