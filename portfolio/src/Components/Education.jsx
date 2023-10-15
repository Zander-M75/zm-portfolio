import React from 'react'
import rutgersBusiness from "../assets/photos/rutgersBusiness.png";
import RutgersBootcamp from "../assets/photos/RutgersBootcamp.png"

function Education() {
  return (
    <section className='h-[1000px] bg-gray-100 flex justify-center items-start'>

      {/* Education Section */}
      <div className='w-1/2 p-8 border-gray-300'>
        <div>
            <h1 className='text-2xl font-semibold mb-4'>Education:</h1>
        </div>

        {/* Rutgers Business School */}
        <div className='flex items-center mb-8'>
            <div className='mr-4'>
                <img className='h-[100px] w-[100px]' src={rutgersBusiness} alt='Rutgers Business School Logo' />
            </div>
            <div>
                <h2 className='text-xl font-medium'>&bull; <span className='text-red-700'>Rutgers University Business School</span>, New Brunswick</h2>
                <h3>&bull; B.S. in Finance, Concentration in Entrepreneurship</h3>
                <h3>&bull; Graduated May 2021</h3>
            </div>
        </div>
        
        {/* Bootcamp */}
        <div className='flex items-center'>
            <div className='mr-4'>
                <img className='h-[100px] w-[100px]' src={RutgersBootcamp} alt='Rutgers Bootcamp Logo' />
            </div>
            <div>
                <h2 className='text-xl font-medium'>&bull; Full-Stack Flex Coding Bootcamp - Rutgers University</h2>
                <h3>&bull; Certificate of Completion</h3>
                <h3>&bull; Graduated February 2023</h3>
            </div>
        </div>
      </div>

    
    </section>
  )
}

export default Education
