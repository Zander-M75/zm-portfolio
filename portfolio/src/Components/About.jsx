import React from 'react';
import zanderCoding from "../assets/photos/zanderCoding.jpg";

function About() {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-100 to-gray-300 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center rounded-lg bg-white shadow-lg overflow-hidden">

        {/* Profile Picture */}
        <div className="md:w-1/3 flex justify-center items-center p-8">
          <img className="rounded-full w-full max-w-lg mx-auto border-4 border-gray-200 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out" 
               src={zanderCoding} 
               alt="Zander Profile Pic" />
        </div>

        {/* Brief Description */}
        <div className="md:w-2/3 md:ml-8 p-8 bg-white rounded shadow-2xl">
          <h2 style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }} 
              className="text-4xl font-semibold mb-4">
            About Me
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            <span role="img" aria-label="Waving Hand" style={{ fontSize: '2em' }}>👋</span>
            Hey there! I'm your go-to coder when you want to talk both React.js and NY Rangers hockey, SQL and sports stats, or HTML/CSS and how the NY Jets might finally turn it around this year.
            <br/><br/>
            <span role="img" aria-label="Teamwork" style={{ fontSize: '2em' }}>🤝</span>
            With a background in team sports, I bring a collaborative and a can-do attitude to the dev table. My skill set leans towards the MERN stack, and I've cut my teeth on projects like "BootyCamp Workout Generator" and "GameGuru," a haven for video game aficionados.
            <br/><br/>
            <span role="img" aria-label="Goal" style={{ fontSize: '2em' }}>🎯</span>
            As someone who's got one foot in the technology world and the other on the pickleball court, my goal is to merge my love for tech and sports into a career grand slam. So if you're looking for a developer with a love for both code and competition, you've found your match!
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;


