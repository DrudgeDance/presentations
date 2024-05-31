import React from 'react';

function WatchLive() {
  return (
    <div className="bg-white flex justify-center w-full relative print:hidden min-w-[335px]" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <div className="max-w-4xl w-full relative">
        <div className="w-full" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <div className="absolute top-0 left-0 w-full h-full rounded-3xl flex justify-center items-center" style={{ backgroundColor: '#636363' }}>
            <button className="bg-[#9b088c] text-white py-3 px-6 rounded-full font-poppins text-2xl">
              Watch Live!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchLive;
