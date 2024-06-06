import React from 'react';
import EvonikRP from './../../assets/images/evonik-rp.png'; // Adjust the path as necessary

function Footer() {
  return (
    <div className="mt-[1vw] bg-white p-5 flex justify-center w-full min-w-[335px]">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col items-center w-full mb-12"> {/* Added mb-10 for margin-bottom */}
          <div className="w-full flex justify-center items-center">
            <h3 className="text-center text-[#9b088c] text-lg font-bold" style={{ paddingLeft: '10px', paddingRight: '20px', flex: 1 }}>
              Thank you to all who participated and made these events possible!
            </h3>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center mt-2">
            <a href="http://www.evonik.com/animal-nutrition" className="text-[#636363] no-underline text-center sm:text-right whitespace-nowrap pr-2 sm:pr-3">
              www.evonik.com/animal-nutrition
            </a>
            <span className="text-[#636363] mx-2 hidden sm:block">•</span>
            <a href="http://www.rpnutrients.com" className="text-[#636363] no-underline text-center sm:text-left whitespace-nowrap pl-2 sm:pl-3">
              www.rpnutrients.com
            </a>
          </div>
          <div className="mt-4">
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