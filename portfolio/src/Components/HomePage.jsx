import React from 'react';
import burger3 from "../assets/photos/burger3.jpeg";
import github2 from "../assets/photos/github2.png";
import linkedin2 from "../assets/photos/linkedin2.png";
import background from "../assets/photos/background.png";  // Import the background image

function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen pt-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('${background}')` }}>
            
            {/* New Card with Low Opacity */}
            <div className="flex flex-col items-center bg-white bg-opacity-50 p-8 rounded-lg shadow-md">
                <div className="rounded-full w-48 h-48 overflow-hidden shadow-lg mb-4">
                    <img src={burger3} alt="Zander" className="w-full h-full object-cover" />
                </div>

                <h1 className="text-4xl font-bold mb-2">Zander Marenberg</h1>
                <h3 className="text-xl text-gray-600 mb-4">A passionate web developer</h3>
                
                <div className="flex gap-4 mb-4">
                    <a href="https://github.com/Zander-M75" target="_blank" rel="noopener noreferrer">
                        <img src={github2} alt="GitHub" className="" />
                    </a>
                    <a href="https://www.linkedin.com/in/zander-marenberg/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin2} alt="LinkedIn" className="" />
                    </a>
                </div>

                <a href="/projects" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                    See Projects
                </a>
            </div>
        </div>
    );
}

export default HomePage;


