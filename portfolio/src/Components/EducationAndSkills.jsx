import React from 'react'
import Education from './Education'
import Skills from './Skills'

function EducationAndSkills() {
  return (
    <div className='flex flex-row justify-evenly items-start w-full px-4 mt-5 mb-5'>
      <div className='shadow-xl rounded-lg'>
        <Education />
      </div>
      <div className='shadow-xl rounded-lg'>
        <Skills />
      </div>
    </div>
  )
}

export default EducationAndSkills;

