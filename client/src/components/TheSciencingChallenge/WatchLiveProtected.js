import React from 'react';
import { useSelector } from 'react-redux';

function WatchLiveProtected({ url }) {
  const fullscreen = useSelector((state) => state.watchCode.fullscreen);
  const iframeRef = React.useRef(null);

  // Append 'autoplay=1' and 'mute=1' to automatically play and start the video muted.
  const enhancedUrl = `${url}&autoplay=1&mute=1`;

  React.useEffect(() => {
    if (fullscreen && iframeRef.current) {
      iframeRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  }, [fullscreen]);

  return (
    <div className="bg-white flex justify-center w-full relative print:hidden" style={{ padding: '20px' }}>
      <div className="max-w-4xl w-full">
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            ref={iframeRef}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src={enhancedUrl}
            title="Live stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default WatchLiveProtected;