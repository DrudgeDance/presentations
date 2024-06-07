// src/Watch.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWatchState } from './../../features/wauth/wauthSlice.js';
import { openModal, closeModal } from './../../features/modal/modalSlice.js';
import WatchLive1 from './WatchLive1.js';
import WatchLiveProtected from './WatchLiveProtected.js';
import CodeModal from './WatchModal/_Entry.js';

function Watch() {
  const dispatch = useDispatch();
  const isWatching = useSelector((state) => state.wauth.isWatching);
  const showModal = useSelector((state) => state.modal.showModal);

  useEffect(() => {
    dispatch(fetchWatchState());
  }, [dispatch]);

  const handleWatchLiveClick = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
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
      dispatch(fetchWatchState());
      dispatch(closeModal());
    } catch (error) {
      console.error('Error submitting code:', error);
    }
  };

  return (
    <>
      {isWatching ? (
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