import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import About from '../Components/About';
import EducationAndSkills from '../Components/EducationAndSkills';
import Projects from '../Components/Projects';
import HomePage from '../Components/HomePage';
import Contact from '../Components/Contact';

function Home() {
  return (
    <Router basename="/">
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
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default Home;

