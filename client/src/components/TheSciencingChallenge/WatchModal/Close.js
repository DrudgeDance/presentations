import React from 'react';
import { XCircleIcon as XCircleOutline } from '@heroicons/react/24/outline';

function CloseButton({ onClose }) {
  return (
    <button 
      onClick={onClose} 
      className="text-[#9b088c] hover:text-[#750667] hover:scale-110 transition-transform duration-200 ease-in-out focus:outline-none"
    >
      <span className="sr-only">Close</span>
      <div className="relative">
        <XCircleOutline className="h-6 w-6" />
      </div>
    </button>
  );
}

export default CloseButton;