import React from 'react';
import Education from './Education';
import Skills from './Skills';

function EducationAndSkills() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start w-full pb-4 md:pb-10 px-4 mt-5 mb-5'>
      <div className='shadow-xl rounded-lg mb-4 md:mb-0 md:mr-4 w-full md:w-auto'>
        <Education />
      </div>
      <div className='shadow-xl rounded-lg w-full md:w-auto'>
        <Skills />
      </div>
    </div>
  )
}

export default EducationAndSkills;


