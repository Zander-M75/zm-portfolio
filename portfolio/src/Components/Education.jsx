import React from 'react';
import rutgersBusiness from '../assets/photos/rutgersBusiness.png';
import RutgersBootcamp from '../assets/photos/RutgersBootcamp.png';
import learnjavascript from '../assets/photos/learnjavascript.png';

function Education() {
  return (
    <section className='flex flex-col justify-between items-center bg-gray-100 p-4 md:p-10 rounded-lg h-auto md:h-[504px] w-full md:w-[624px]'>
      <div className='w-full'>
        <div>
            <h1 className='text-2xl md:text-4xl font-bold mb-4'>Education:</h1>
        </div>
        
        {/* Rutgers Business School */}
        <div className='flex flex-col md:flex-row items-center mb-6 bg-white p-4 rounded-lg shadow-md'>
            <div className='mb-4 md:mb-0 md:mr-4'>
                <img className='h-16 md:h-24 w-16 md:w-24' src={rutgersBusiness} alt='Rutgers Business School Logo' />
            </div>
            <div>
                <h2 className='text-lg md:text-xl font-bold'>&bull; <span className='text-red-700'>Rutgers University Business School</span></h2>
                <h3 className='text-base md:text-lg font-medium'>&bull; B.S. in Finance, Concentration in Entrepreneurship</h3>
                <h3 className='text-base md:text-lg'>&bull; Graduated May 2021</h3>
            </div>
        </div>
        
        {/* Rutgers Bootcamp */}
        <div className='flex flex-col md:flex-row items-center mb-6 bg-white p-4 rounded-lg shadow-md'>
            <div className='mb-4 md:mb-0 md:mr-4'>
                <img className='h-16 md:h-24 w-16 md:w-24' src={RutgersBootcamp} alt='Rutgers Bootcamp Logo' />
            </div>
            <div>
                <h2 className='text-lg md:text-xl font-bold'>&bull; Full-Stack Coding Bootcamp - Rutgers University</h2>
                <h3 className='text-base md:text-lg font-medium'>&bull; Certificate of Completion</h3>
                <h3 className='text-base md:text-lg'>&bull; Graduated February 2023</h3>
            </div>
        </div>

      </div>
    </section>
  );
}

export default Education;



