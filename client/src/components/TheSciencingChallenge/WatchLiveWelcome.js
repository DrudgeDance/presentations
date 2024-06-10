import React from 'react';

function WatchLive1({ onWatchLive }) {
  const handleClick = () => {
    onWatchLive();
  };

  return (
    <div className="bg-white flex justify-center w-full relative print:hidden min-w-[335px] px-5">
      <div className="bg-black max-w-4xl w-full relative rounded-3xl" style={{ aspectRatio: '16 / 9' }}>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-3xl">
          <button
            onClick={handleClick}
            className="bg-[#9b088c] hover:bg-[#750667] text-white py-3 px-6 rounded-full font-poppins text-2xl transition-colors duration-200 ease-in-out"
          >
            Watch Live!
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchLive1;