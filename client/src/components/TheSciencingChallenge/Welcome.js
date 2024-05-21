import React from 'react';
import ChallengeImage from './../../assets/images/tsc.jpg';

function Welcome() {
  return (
    <div className="mt-[1vw] bg-white p-5 flex justify-center flex-col items-center w-full">
      <div className="max-w-4xl w-full flex">
        <div className="w-1/2 flex">
          <div className="min-w-[200px] w-2/3">
            <img 
              src={ChallengeImage} 
              alt="The Sciencing Challenge" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-end items-end pl-4">
          <div className="font-poppins text-2xl mb-0 text-right" style={{ color: '#9b088c' }}>
            <strong className="hidden sm:block md:hidden">Welcome to Finals!</strong>
            <strong className="hidden md:block lg:hidden">Welcome 2024 Finalists!</strong>
            <strong className="hidden lg:block">Welcome to the 2024 Finals!</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;