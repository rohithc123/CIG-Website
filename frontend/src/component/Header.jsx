import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: "HOME", link: "/" },
        { name: "ABOUT US", link: "/about" },
        { name: "ADCI'S INITIATIVES", link: "/event" },
        { name: "CLI", link: "/blog" },
        { name: "CONTACT US", link: "/contact" },
    ];

    return (
        <header>
            <nav style={{
                boxShadow: "0px 0px 15px 4px rgba(0,0,0,0.5)",
                WebkitBoxShadow: "0px 0px 15px 4px rgba(0,0,0,0.5)",
                MozBoxShadow: "0px 0px 15px 4px rgba(0,0,0,0.5)",
            }} className="w-full flex justify-between items-center py-2 px-9 bg-[#3C4DC2] shadow-md relative font-montserrat">
                <div className="flex font-sans tracking-tight">
                    <Link to="/"> <img src="./src/assets/iitr.png" alt="IITR Logo" className=" mx-2 my-0" /></Link>
                    <Link to="/"><img src="./src/assets/Logo.png" alt="Website Logo" className=" mx-2 my-0" /></Link>
                </div>

                <button
                    className="text-white text-3xl sm:hidden focus:outline-none z-50 absolute top-4 right-4"
                    onClick={toggleMenu}
                >
                    <i className={`fas z-50 ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>

                <ul
                    className={`${isMenuOpen
                        ? "fixed top-0 right-0 bg-[#3C4DC2] w-1/2 h-full flex flex-col items-center z-40 transform translate-x-0 transition-all duration-500 ease-in-out"
                        : "fixed top-0 right-[-100%] bg-[#3C4DC2] w-1/2 h-full flex flex-col items-center z-40 transform translate-x-full transition-all duration-500 ease-in-out"
                        } sm:flex sm:flex-row sm:items-center sm:space-x-8 sm:static sm:bg-transparent sm:w-auto sm:h-auto sm:translate-x-0`}
                >
                    {menuItems.map((item, index) => (
                        <li key={index} className={`max-xl:mt-10 pl-8 list-none`}>
                            <Link
                                to={item.link}
                                className="relative max-xl:p-2 inline-block text-white no-underline text-center uppercase transition-all duration-150 ease-in-out group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-transparent transition-all duration-150 ease-in-out group-hover:w-full"></span>
                                <span className="absolute bottom-[-6px] left-0 h-[3px] w-full bg-white rounded-full transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
