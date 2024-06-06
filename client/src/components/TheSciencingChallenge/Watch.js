import React, { useState, useEffect } from 'react';
import WatchLive1 from './WatchLive1.js';
import WatchLiveProtected from './WatchLiveProtected.js';
import CodeModal from './WatchModal/_Entry.js';

function Watch() {
  const [showStream, setShowStream] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAuthState = async () => {
      try {
        const response = await fetch('/auth');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }

        const data = await response.json();
        setShowStream(data.message === 'authorized');
      } catch (error) {
        console.error('Error fetching auth state:', error);
      }
    };

    fetchAuthState();
  }, []);

  const handleWatchLiveClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCodeSubmit = async (code) => {
    try {
      const response = await fetch('/wauth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Assuming the server sets the cookie automatically on success
      setShowStream(true);
      setShowModal(false);
    } catch (error) {
      console.error('Error submitting code:', error);
    }
  };

  return (
    <>
      {showStream ? (
        <WatchLiveProtected />
      ) : (
        <WatchLive1 onWatchLive={handleWatchLiveClick} />
      )}
      {showModal && (
        <CodeModal onSubmit={handleCodeSubmit} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Watch;
