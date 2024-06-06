import React from 'react';
import EvonikRP from './../../assets/images/evonik-rp.png';

function Header() {
  return (
    <div className="mt-[1vw] bg-white pt-16 px-5 pb-5 flex justify-center">
      <div className="max-w-4xl w-full flex">
        <div className="w-1/2 flex">
          <div className="min-w-[200px] w-2/3">
            <img 
              src={EvonikRP} 
              alt="Header Image" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-end items-end pl-4">
          {/* Empty right-hand div */}
        </div>
      </div>
    </div>
  );
}

export default Header;