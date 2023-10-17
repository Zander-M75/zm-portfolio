import React from 'react'
import logo from "../assets/photos/logo.png"

function Header() {
  return (
    <header className='sticky z-50 top-0 w-full flex justify-between items-center h-[95px] pl-8 pr-48 bg-white shadow-md font-poppins'>
        <div className='mb-2'>
            <img src={logo} alt='header logo' />
        </div>

        <nav>
            <ul className='flex space-x-20 text-xl'>
                
                <li 
                className='transition-transform duration-300 transform hover:shadow-lg hover:-translate-y-1 hover:text-white hover:bg-[#595c9f] p-6 cursor-pointer rounded-lg'>
                    <a href='#about'>About</a>
                </li>
                
                <li 
                className='transition-transform duration-300 transform hover:shadow-lg hover:-translate-y-1  hover:text-white hover:bg-[#595c9f] p-6 cursor-pointer rounded-lg'>
                    <a href='#projects'>Projects</a>
                </li>
                
                <li 
                className='transition-transform duration-300 transform hover:shadow-lg hover:-translate-y-1  hover:text-white hover:bg-[#595c9f] p-6 cursor-pointer rounded-lg'>
                    <a href='#contact'>Contact</a>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default Header;