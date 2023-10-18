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
    description: "GameGuru, built with React.js & Tailwind CSS, lets users explore popular games by genre. Created to master API use, React components, and learn Tailwind. Future plans include a full game store with checkout.",
    link: "https://zander-m75.github.io/GameGuru/", 
    title: "GameGuru"
  },
  {
    logo: booty,
    description: "BootyCamp, A team-built full-stack app where users get personalized workout plans based on fitness goals. I designed the landing, sign-in, and workout generator pages, using HTML, Javascript, CSS, Handlebars.js, Bootstrap and Materialize.",
    link: "https://github.com/pmorris50/Workout-Creator",
    title: "BootyCamp Workout Generator"
  },
  {
    logo: cash,
    description: "Cash Me If You Can: A swift currency converter built with HTML, CSS, and vanilla JavaScript for quick and easy currency checks.",
    link: "https://zander-m75.github.io/CashMeIfYouCan/", 
    title: "Cash Me If You Can"
  },
  {
    logo: sportquiz,
    description: "Timed Sports Quiz: A dynamic sports trivia game built with HTML, CSS, JavaScript, and JQuery. Crafted to hone DOM skills and timer functions.",
    link: "https://zander-m75.github.io/Time-Coding-Quiz-Game/",
    title: "Timed Sports Quiz"
  },  
  {
    logo: youtube,
    description: "YouTube Clone: A pixel-perfect replica of YouTube's front end using HTML and CSS. Designed for cross-device compatibility and layout precision.",
    link: "https://zander-m75.github.io/YoutubeClone/", 
    title: "YouTube Clone"
  }, 
  {
    logo: workdayplanner,
    description: "Workday Planner: A daily scheduling tool crafted with HTML, CSS, JavaScript, and jQuery. Designed to hone skills in JavaScript date/time handling, DOM interactions, and API calls.",
    link: "https://zander-m75.github.io/Workday-Planner-75/",
    title: "Workday Planner"
  },  
];

function FrontOfCard({ logo }) {
    return (
      <div className="absolute inset-0 w-full h-full shadow-md bg-gradient-to-r from-slate-300 to-slate-100 p-6 flex justify-center items-center transition-all duration-100 delay-200 z-20 hover:opacity-0">
        <img src={logo} alt="Project Logo" className='w-full h-full object-cover' />
      </div>
    );
  }
  
  function BackOfCard({ title, description }) {
    return (
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-[#595c9f] text-white transition-all z-10 card-back p-4">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    );
  }
  
  
  
  function Projects() {
    return (
      <div className='flex justify-center'>
          <div className='mt-14 mb-72 p-8'>
          <div className="mb-8 bg-gradient-to-r from-[#595c9f] to-purple-300 p-6 rounded-lg shadow-md">
    <h1 className="text-3xl font-extrabold text-white mb-3">My Projects</h1>
    <h3 className="text-xl font-medium text-white opacity-80">A showcase of projects I've developed and contributed to.</h3>
</div>

    <div className='grid grid-cols-3 gap-4 mb-8'>
        {projectData.map((project, index) => (
          <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card'>
            <FrontOfCard logo={project.logo} />
            <BackOfCard title={project.title} description={project.description} /> {/* You can replace "Project Title" with actual titles if you have them in your projectData */}
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