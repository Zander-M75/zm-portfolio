import React from 'react';
import gameguru from "../assets/photos/portfolio_projects/gameguru.png";
import booty from "../assets/photos/portfolio_projects/booty.png";
import cash from "../assets/photos/portfolio_projects/cash.png";
import sportquiz from "../assets/photos/portfolio_projects/sportquiz.png";
import youtube from "../assets/photos/portfolio_projects/youtube.png";
import workdayplanner from "../assets/photos/portfolio_projects/workdayplanner.png"; 

const projectData = [
  {
    logo: gameguru,
    description: "A front-end gaming app",
    link: "https://gameguru.example.com" // example link
  },
  {
    logo: booty,
    description: "A workout generator",
    link: "https://booty.example.com" // example link
  },
  {
    logo: cash,
    description: "Currency converter",
    link: "https://cash.example.com" // example link
  },
  {
    logo: sportquiz,
    description: "A timed sports quiz game",
    link: "https://sportquiz.example.com" // example link
  },  
  {
    logo: youtube,
    description: "A front end, responsive YouTube clone",
    link: "https://youtubeclone.example.com" // example link
  }, 
  {
    logo: workdayplanner,
    description: "A planner for your day",
    link: "https://youtubeclone.example.com" // example link
  },  
];

function FrontOfCard({ logo }) {
    return (
      <div className="absolute inset-0 w-full h-full shadow-md bg-gradient-to-r from-slate-300 to-slate-100 p-6 flex justify-center items-center transition-all duration-100 delay-200 z-20 hover:opacity-0">
        <img src={logo} alt="Project Logo" className='w-full h-full object-cover' />
      </div>
    );
  }
  
  function BackOfCard({ description }) {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-[#595c9f] text-white transition-all z-10 card-back">
        {description}
      </div>
    );
  }
  
  
  function Projects() {
    return (
      <div className='flex justify-center'>
          <div className='mt-14 mb-72 p-8'>
          <div className="mb-12 bg-gradient-to-r from-[#595c9f] to-purple-300 p-6 rounded-lg shadow-md">
    <h1 className="text-3xl font-extrabold text-white mb-3">My Projects</h1>
    <h3 className="text-xl font-medium text-white opacity-80">A showcase of projects I've developed and contributed to.</h3>
</div>

              <div className='grid grid-cols-3 gap-4 mb-8'>
                {projectData.map((project, index) => (
                  <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card'>
                    <FrontOfCard logo={project.logo} />
                    <BackOfCard description={project.description} />
                  </a>
                ))}
              </div>
              <div className='text-center py-4 mt-4 bg-[#595c9f] text-white rounded-full shadow-xl'>
                  <h4 className='text-xl font-semibold'>More coming soon...</h4>
              </div>
          </div>
      </div>
    );
  }
  

  export default Projects;