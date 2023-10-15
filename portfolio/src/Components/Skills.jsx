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

import firebase from "../assets/photos/techStack/firebase.png";
import node from "../assets/photos/techStack/node.png";
import express from "../assets/photos/techStack/express.png";
import handlebars from "../assets/photos/techStack/handlebars.png";
import jest from "../assets/photos/techStack/jest.png";
import sequelize from "../assets/photos/techStack/sequelize.png";

import sql from "../assets/photos/techStack/sql.png";
import mongo from "../assets/photos/techStack/mongo.png";

import git from "../assets/photos/techStack/git.png";
import github from "../assets/photos/techStack/github.png";

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendTech = [
     { name: 'JavaScript ES6+', logo: javascript },
     { name: 'HTML5', logo: html },
     { name: 'React.js', logo: react },    
     { name: 'CSS3', logo: css },
     { name: 'JQuery', logo: jquery },
     { name: 'Tailwind CSS', logo: tailwind },
     { name: 'Materialize', logo: materialize },
     { name: 'Bootstrap', logo: bootstrap }, 
     { name: 'Redux', logo: redux },  
  ];

  const backendTech = [
    { name: 'Firebase', logo: firebase },
    { name: 'JavaScript ES6+', logo: javascript },
    { name: 'Node.js', logo: node },
    { name: 'Express.js', logo: express },
    { name: 'Jest.js', logo: jest },
    { name: 'Handlebars.js', logo: handlebars },
    { name: 'Sequelize.js', logo: sequelize },


];

  const databaseTech = [
    { name: 'SQL', logo: sql },
    { name: 'MongoDB', logo: mongo },
];

  const devOpsTech = [
    { name: 'Git', logo: git },
    { name: 'GitHub', logo: github },


];

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
    <section className="bg-gray-100 flex justify-between items-center w-1/2 p-8 border-gray-300">
      <div>
        <h1 className="text-4xl font-semibold mb-4">Tech Stack</h1>
        <div className="flex mb-4">
          <button
            className={`p-4 rounded-lg ${activeTab === 'frontend' ? 'bg-[#595c9f] text-white' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button
            className={`p-4 rounded-lg ${activeTab === 'backend' ? 'bg-[#595c9f] text-white' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button
            className={`p-4 rounded-lg ${activeTab === 'database' ? 'bg-[#595c9f] text-white' : ''}`}
            onClick={() => setActiveTab('database')}
          >
            Database
          </button>
          <button
            className={`p-4 rounded-lg ${activeTab === 'devOps' ? 'bg-[#595c9f] text-white' : ''}`}
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

