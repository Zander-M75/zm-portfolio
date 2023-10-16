import React from 'react'
import Education from './Education'
import Skills from './Skills'

function EducationAndSkills() {
  return (
    <div className='flex flex-row justify-between items-start w-full px-4 mt-5 mb-5'>
      <div className='flex-1 p-4'>
        <Education />
      </div>
      <div className='flex-1 p-4'>
        <Skills />
      </div>
    </div>
  )
}

export default EducationAndSkills;

