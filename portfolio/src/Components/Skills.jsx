import React, { useState } from 'react';

// image imports
import javascript from "../assets/photos/techStack/javascript.png";
import react from "../assets/photos/techStack/react.png";
import html from "../assets/photos/techStack/html.png";
import css from "../assets/photos/techStack/css.png";
import jquery from "../assets/photos/techStack/jquery.png";
import materialize from "../assets/photos/techStack/materialize.png";
import tailwind from "../assets/photos/techStack/tailwind.png";
import redux from "../assets/photos/techStack/redux.png";
import bootstrap from "../assets/photos/techStack/bootstrap.png";

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendTech = [
     { name: 'JavaScript ES6+', logo: javascript },
     { name: 'HTML5', logo: html },
     { name: 'React.js', logo: react },    
     { name: 'CSS3', logo: css },
     { name: 'JQuery', logo: jquery },
     { name: 'Tailwind CSS', logo: tailwind },   
  ];

  const backendTech = [];

  const databaseTech = [];

  const devOpsTech = [];

  const getTechToDisplay = () => {
    switch (activeTab) {
      case 'frontend':
        return frontendTech;
      case 'backend':
        return backendTech;
      case 'database':
        return databaseTech;
      case 'devOps':
        return devOpsTech;
      default:
        return [];
    }
  };

  return (
    <section className="bg-gray-100 p-10 h-[1000px] flex justify-center items-center">
      <div className="border-2 border-gray-300 p-8 rounded-lg shadow-md w-[80%]">
        <h1 className="text-4xl font-semibold mb-4">Tech Stack</h1>
        <div className="flex mb-4">
          <button
            className={`p-4 ${activeTab === 'frontend' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button
            className={`p-4 ${activeTab === 'backend' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button
            className={`p-4 ${activeTab === 'database' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setActiveTab('database')}
          >
            Database
          </button>
          <button
            className={`p-4 ${activeTab === 'devOps' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setActiveTab('devOps')}
          >
            DevOps/Other
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {getTechToDisplay().map((tech, index) => (
            <div key={index} className="text-center ring-2 ring-opacity-50 ring-blue-200 p-2 rounded hover:bg-blue-100 transition duration-300">
              <img src={tech.logo} alt={tech.name} className="mx-auto h-16 w-16" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

