import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import About from '../Components/About';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import EducationAndSkills from '../Components/EducationAndSkills';
import Projects from '../Components/Projects';
import HomePage from '../Components/HomePage';

function Home() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-education" element={
                <>
                    <About />
                    <EducationAndSkills />
                </>
            } />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
);
}

export default Home;
