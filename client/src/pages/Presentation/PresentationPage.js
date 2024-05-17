import React from 'react';


export default function VideoPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.restream.io/?token=7e413156e230443e8e3c098f2537c112"
          allow="autoplay"
          allowFullScreen
          frameBorder="0"
          style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </div>
  );
}