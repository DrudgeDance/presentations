import React from 'react';
import EvonikRP from './../../assets/images/evonik-rp.jpg'; // Adjust the path as necessary

function Footer() {
  return (
    <div className="mt-[1vw] bg-white p-5 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="w-full mb-4 flex justify-center items-center">
          <h3 className="text-center text-[#9b088c] text-lg font-bold min-w-[100px]">
            We extend our gratitude to all participants and contributors!
          </h3>
        </div>
        
        <div className="relative w-full mb-3 flex flex-col items-center">
          <div className="relative w-full flex flex-col sm:flex-row justify-center items-center mb-2 sm:mb-0">
            <div className="flex justify-center items-center w-full sm:w-1/2 mb-2 sm:mb-0 sm:justify-end pr-4 sm:pr-8">
              <a href="http://www.evonik.com/animal-nutrition" className="text-black no-underline text-center sm:text-right whitespace-nowrap">
                www.evonik.com/animal-nutrition
              </a>
            </div>
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 text-black">•</div>
            <div className="flex justify-center items-center w-full sm:w-1/2 mt-2 sm:mt-0 sm:justify-start pl-4 sm:pl-8">
              <a href="http://www.rpnutrients.com" className="text-black no-underline text-center sm:text-left whitespace-nowrap">
                www.rpnutrients.com
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center w-full mt-4">
            <img 
              src={EvonikRP} 
              alt="Footer Image" 
              className="w-[350px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
