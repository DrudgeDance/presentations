// Watch.js
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitCode } from '../../features/watchCode/watchCodeSlice.js';  // Ensure correct path
import { openModal, closeModal } from '../../features/modal/modalSlice.js';  // Ensure correct path
import WatchLive1 from './WatchLiveWelcome.js';
import WatchLiveProtected from './WatchLiveProtected.js';
import CodeModal from './WatchModal/_Entry.js';

function Watch() {
    const dispatch = useDispatch();
    const { isWatching, isWatchingUrl } = useSelector(state => state.watchCode);
    const showModal = useSelector(state => state.modal.showModal);

    const handleWatchLiveClick = () => {
        dispatch(openModal());
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const handleCodeSubmit = async (code) => {
        await dispatch(submitCode(code));
    };

    return (
        <>
            {isWatching ? (
                <WatchLiveProtected url={isWatchingUrl} />
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