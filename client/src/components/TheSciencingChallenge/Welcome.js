import React from 'react';
import ChallengeImage from './../../assets/images/tsc.png';

const Welcome = () => (
  <>
    <div className="mt-[1vw] bg-white p-5 flex justify-center flex-col items-center w-full">
      <div className="max-w-4xl w-full flex">
        <div className="w-1/2 flex">
          <div className="min-w-[200px] w-8/9">
            <img 
              src={ChallengeImage} 
              alt="The Sciencing Challenge" 
              className="w-full h-auto object-contain transition-none" 
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-end items-end pl-4 text-right z-10">
          <div className="font-poppins mb-0 text-[#9b088c]">
            <div className="max-w-full overflow-visible text-ellipsis">
              <div className="whitespace-nowrap text-[calc(10px+2vw)] sm:text-[calc(12px+2vw)] md:text-[calc(14px+2vw)] lg:text-[calc(16px+2vw)] xl:text-[40px]">
                <strong>Welcome to the</strong>
              </div>
              <div className="whitespace-nowrap text-[calc(10px+2vw)] sm:text-[calc(12px+2vw)] md:text-[calc(14px+2vw)] lg:text-[calc(16px+2vw)] xl:text-[40px]">
                <strong>2024 Finals!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Welcome;