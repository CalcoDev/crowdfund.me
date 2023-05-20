import { Link } from 'react-router-dom'

const NavLink = ({ title, imgSrc, link, onClick }) => {
    return (
        <div className="w-full h-full relative hover:scale-95 transition duration-300 ease-in-out filter saturate-0 hover:saturate-100">
            <img
                src={imgSrc}
                alt={`Image background for ${link}`}
                className="absolute w-full h-full object-cover -z-0"
            />

            <div className="w-full h-full flex justify-center items-center pointer-events-auto">
                <Link
                    className="z-10 font-cfm-spartan font-light text-cfm-white text-lg tracking-cfm-3 indent-cfm-3"
                    to={link}
                    onClick={onClick}
                >
                    {title}
                </Link>
            </div>
        </div>
    )
}

export default NavLink
