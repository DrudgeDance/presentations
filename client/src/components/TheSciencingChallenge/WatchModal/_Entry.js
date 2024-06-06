import React from 'react';
import CloseButton from './Close.js';
import ModalContent from './Content.js';

function WatchModal({ onSubmit, onClose }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="fixed inset-0 bg-[#B718A0] bg-opacity-95 z-40"></div> {/* Opaque background with fixed positioning */}
      <div className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-full max-w-sm mx-4 sm:mx-auto sm:w-96 min-w-[384px] z-50">
        <div className="flex justify-end pt-2 pr-2 pl-2"> {/* Only top, right, and left padding */}
          <CloseButton onClose={onClose} />
        </div>
        <ModalContent onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default WatchModal;