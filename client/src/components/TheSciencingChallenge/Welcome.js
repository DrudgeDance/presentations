import React from 'react';
import ChallengeImage from './../../assets/images/tsc.jpg';

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
        <div className="w-1/2 flex flex-col justify-end items-end pl-4 text-right" style={{ position: 'relative', zIndex: 1 }}>
          <div className="font-poppins mb-0" style={{ color: '#9b088c' }}>
            <div className="text-container">
              <div className="text no-wrap">
                <strong>Welcome to the</strong>
              </div>
              <div className="text no-wrap">
                <strong>2024 Finals!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .text-container {
        max-width: 100%;
        overflow: visible;
        text-overflow: ellipsis;
      }
      .no-wrap {
        white-space: nowrap;
      }
      .text {
        font-size: calc(10px + 2vw); /* Responsive font size relative to viewport width */
      }
      @media (min-width: 640px) {
        .text {
          font-size: calc(12px + 2vw); /* Adjust font size for larger screens */
        }
      }
      @media (min-width: 768px) {
        .text {
          font-size: calc(14px + 2vw); /* Further adjust font size for medium screens */
        }
      }
      @media (min-width: 1024px) {
        .text {
          font-size: calc(16px + 2vw); /* Further adjust font size for large screens */
        }
      }
      @media (min-width: 1200px) {
        .text {
          font-size: 40px; /* Stop growing the font size at 1200px viewport width */
        }
      }
    `}</style>
  </>
);




export default Welcome;