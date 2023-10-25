import React from 'react';
import burger3 from "../assets/photos/burger3.jpeg";
import github3 from "../assets/photos/github3.png";
import linkedin2 from "../assets/photos/linkedin2.png";
import background from "../assets/photos/background.png";  // Import the background image

function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: `url('${background}')` }}>
            {/* Card with Low Opacity */}
            <div className="flex flex-col items-center mb-20 bg-white bg-opacity-70 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl z-10">
                <div className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 overflow-hidden shadow-lg mb-5">
                    <img src={burger3} alt="Zander" className="w-full h-full object-cover" />
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 antialiased">Zander Marenberg</h1>
                <h3 className="text-sm sm:text-md md:text-xl text-gray-700 mb-4 antialiased">A passionate web developer</h3>
                
                <div className="flex gap-3 sm:gap-4 md:gap-5 mb-5">
                    <a href="https://github.com/Zander-M75" target="_blank" rel="noopener noreferrer" className='transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                        <img src={github3} alt="GitHub" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
                    </a>
                    <a href="https://www.linkedin.com/in/zander-marenberg/" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <img src={linkedin2} alt="LinkedIn" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
                    </a>
                </div>

                <a href="/projects" className="bg-[#595c9f] text-white py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 md:px-5 rounded-lg transition-transform transform hover:scale-110 hover:shadow-2xl">
                    See Projects
                </a>
            </div>
        </div>
    );
}

export default HomePage;



