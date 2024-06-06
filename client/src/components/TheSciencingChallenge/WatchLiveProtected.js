import React, { useState, useEffect } from 'react';

function WatchLiveProtected() {
  const [videoURL, setVideoURL] = useState('');

  useEffect(() => {
    // Fetch the video URL from the backend
    const fetchVideoURL = async () => {
      try {
        const response = await fetch('/api/video-url');
        const data = await response.json();
        setVideoURL(data.url);
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoURL();
  }, []);

  return (
    <div className="bg-white flex justify-center w-full relative print:hidden min-w-[335px]" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <div className="max-w-4xl w-full relative">
        <div className="w-full" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <div className="top-0 left-0 w-full h-full rounded-3xl flex justify-center items-center" style={{ backgroundColor: '#636363' }}>
            <iframe
              width="100%"
              height="100%"
              src={videoURL}
              title="YouTube live stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl top-0 left-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchLiveProtected;