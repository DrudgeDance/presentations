// Content.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HiddenCustomInput from './HiddenInput.js';
import { submitCode, setFullscreen } from './../../../features/watchCode/watchCodeSlice.js';
import { 
  initialCharacterMessage, 
  validateFullPattern, 
  generateFeedback 
} from './validationHelpers.js';

function ModalContent({ onSubmit }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(initialCharacterMessage); 
  const [showInput, setShowSqlInput] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (input.length === 0) {
      setFeedback(initialCharacterMessage);
    }
  }, [input.length]);

  const handleInputChange = (newInput) => {
    setInput(newInput);
    setFeedback(generateFeedback(newInput));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 7 && validateFullPattern(input)) {
      console.log("INPUT:", input)
      dispatch(submitCode({ code: input, fullscreen: fullScreen }));
    }
  };

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen); // Toggle the state for fullScreen
  };

  const isButtonEnabled = input.length === 7 && validateFullPattern(input);

  return (
    <div className="relative px-6 pb-5">
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
        <HiddenCustomInput
          input={input}
          setInput={handleInputChange}
          showInput={showInput}
          setShowInput={setShowSqlInput}
        />
{/* <div className="flex items-center text-sm mt-2 min-h-[1.25rem]">
  <div className="mr-2 cursor-pointer" onClick={toggleFullScreen}>
    {fullScreen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#D3A4C4]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <rect width="24" height="24" rx="2" 
        fill="#9b088c" 
        />
        <polyline points="6 12 10 16 18 8" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#D3A4C4] border border-[#EAD1E0] rounded bg-[#9b088c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="24" height="24" rx="2" fill="#9b088c" />
      </svg>
    )}
  </div>
  <label className="text-[#D3A4C4] cursor-pointer" onClick={toggleFullScreen}>
    Full Screen Mode
  </label>
</div> */}



        <button
          type="submit"
          disabled={!isButtonEnabled}
          className={`mt-3 py-2 px-6 w-auto rounded-full font-poppins text-base transition-colors duration-200 ease-in-out ${
            isButtonEnabled ? 'bg-[#9b088c] hover:bg-[#750667] text-white cursor-pointer' : 'bg-[#9b088c] text-[#750667] cursor-not-allowed'
          }`}
        >
          Submit Code
        </button>
        <div className={`text-sm mt-2 ${feedback.includes("Warning") ? "text-red-500" : "text-[#9b088c]"} min-h-[1.25rem]`}>
            {feedback}
        </div>
      </form>
    </div>
  );
}

export default ModalContent;