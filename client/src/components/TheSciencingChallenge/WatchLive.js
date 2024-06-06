import React, { useState } from 'react';

function WatchLive() {
  const [showStream, setShowStream] = useState(false);

  const handleClick = () => {
    const userInput = prompt('Enter the code to watch the live stream:');
    if (userInput === 'TSC2024') {
      setShowStream(true);
    } else {
      alert('Incorrect code. Please try again.');
    }
  };

  return (
    <div className="bg-white flex justify-center w-full relative print:hidden min-w-[335px]" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <div className="max-w-4xl w-full relative">
        <div className="w-full" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <div className="top-0 left-0 w-full h-full rounded-3xl flex justify-center items-center" style={{ backgroundColor: '#636363' }}>
            {!showStream ? (
              <button onClick={handleClick} className="bg-[#9b088c] text-white py-3 px-6 rounded-full font-poppins text-2xl">
                Watch Live!
              </button>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/live_stream?channel=UCMXjh78o_6pYrJn7ExPaGMw"
                title="YouTube live stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-3xl top-0 left-0"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchLive;

// https://www.youtube.com/channel/UCMXjh78o_6pYrJn7ExPaGMw/live