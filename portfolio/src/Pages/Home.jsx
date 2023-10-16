import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Education from '../Components/Education'
import Skills from '../Components/Skills'
import EducationAndSkills from '../Components/EducationAndSkills'
import Projects from '../Components/Projects'

function Home() {
  return (
    <>
    <Header />
    <About />
    <EducationAndSkills />
    <Projects />
    </>
  )
}

export default Home