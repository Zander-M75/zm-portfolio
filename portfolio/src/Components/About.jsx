import React from 'react';
import zanderCoding from "../assets/photos/zanderCoding.jpg";

function About() {
  return (
    <section id="about" className="bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-5">

        {/* Profile Picture with Hover Effect */}
        <div className="md:w-1/3 flex justify-center items-center p-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="rounded-full w-full max-w-lg mx-auto border-4 border-gray-200 shadow-lg hover:shadow-2xl" src={zanderCoding} alt="Zander Profile Pic" />
        </div>

        {/* Brief Description */}
        <div className="md:w-2/3 md:ml-8 p-8 bg-white rounded shadow-lg">
          <h2 style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }} className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed group">
            <span role="img" aria-label="Waving Hand" style={{ fontSize: '2em' }}>👋</span>
            <span className="hover:text-white hover:bg-[#595c9f] p-2 rounded transition duration-200 hover:shadow-lg">Hey there! I'm your go-to coder when you want to talk both React.js and NY Rangers hockey, SQL and sports stats, or HTML/CSS and how the NY Jets might finally turn it around this year.</span>
            <br/><br/>
            <span role="img" aria-label="Teamwork" style={{ fontSize: '2em' }}>🤝</span>
            <span className="hover:text-white hover:bg-[#595c9f] p-2 rounded transition duration-200 hover:shadow-lg">With a background in team sports, I bring a collaborative and a can-do attitude to the dev table. My skill set leans towards the MERN stack, and I've cut my teeth on projects like "BootyCamp Workout Generator" and "GameGuru," a haven for video game aficionados.</span>
            <br/><br/>
            <span role="img" aria-label="Goal" style={{ fontSize: '2em' }}>🎯</span>
            <span className="hover:text-white hover:bg-[#595c9f] p-2 rounded transition duration-200 hover:shadow-lg">As someone who's got one foot in the technology world and the other on the pickleball court, my goal is to merge my love for tech and sports into a career grand slam. So if you're looking for a developer with a love for both code and competition, you've found your match!</span>
          </p>
        </div>

      </div>
    </section>
  )
}

export default About;




