import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/photos/logo.png";

function Header() {
    return (
        <header className='sticky z-50 top-0 w-full flex justify-between items-center h-16 md:h-[95px] pl-4 md:pl-8 pr-8 md:pr-48 bg-white shadow-md font-poppins'>
            <div className='mb-2'>
                {/* Link the logo to the HomePage */}
                <Link to="/">
                    <img src={logo} alt='header logo' className="w-[50px] sm:w-[75px] md:w-auto min-w-[150px]"/>
                </Link>
            </div>

            <nav>
                <ul className='flex space-x-4 md:space-x-20 text-sm md:text-xl'>
                    
                    <li className='transition-transform duration-300 transform hover:shadow-lg hover:-translate-y-1 hover:text-white hover:bg-[#595c9f] p-2 md:p-6 cursor-pointer rounded-lg'>
                        {/* Link to the combined About and EducationAndSkills components */}
                        <Link to="/about-education">About</Link>
                    </li>
                    
                    <li className='transition-transform duration-300 transform hover:shadow-lg hover:-translate-y-1 hover:text-white hover:bg-[#595c9f] p-2 md:p-6 cursor-pointer rounded-lg'>
                        {/* Link to the Projects component */}
                        <Link to="/projects">Projects</Link>
                    </li>
                    
                    <li className='transition-transform duration-300 transform hover:shadow-lg hover:-translate-y-1 hover:text-white hover:bg-[#595c9f] p-2 md:p-6 cursor-pointer rounded-lg'>
                        <Link to="/contact">Contact</Link>
                    </li>
                   
                </ul>
            </nav>
        </header>
    )
}

export default Header;


