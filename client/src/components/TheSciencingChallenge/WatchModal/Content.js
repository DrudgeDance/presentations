import React, { useState } from 'react';
import HiddenCustomInput from './HiddenInput.js'; // Adjust the import path as necessary

function ModalContent({ onSubmit }) {
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [warningMessage, setWarningMessage] = useState(''); // State for warning messages

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 7 && validatePattern(input)) {
      onSubmit(input);
    }
  };

  const handleInputChange = (newInput) => {
    setInput(newInput);
    if (newInput.length > 7) {
      setWarningMessage('Warning: Verify code length.');
    } else if (!validatePattern(newInput)) {
      setWarningMessage('Warning: Code Pattern Incorrect.');
    } else {
      setWarningMessage('');
    }
  };

  const validatePattern = (code) => {
    const letterPart = code.slice(0, 3);
    const numberPart = code.slice(3);
    const letterPartValid = /^[A-Za-z]{0,3}$/.test(letterPart);
    const numberPartValid = /^[0-9]{0,4}$/.test(numberPart);
    return letterPartValid && numberPartValid;
  };

  const charactersRemaining = 7 - input.length;

  return (
    <div className="relative px-6 pb-5">
      <form onSubmit={handleSubmit} className="mt-4"> {/* Adjusted margin-top for spacing */}
        <div className="flex flex-col items-center"> {/* Added bottom padding */}
          <HiddenCustomInput
            input={input}
            setInput={handleInputChange}
            showInput={showInput}
            setShowInput={setShowInput}
          />
          <button
            type="submit"
            className={`mt-3 py-2 px-6 w-auto rounded-full font-poppins text-base transition-colors duration-200 ease-in-out ${
              input.length === 7 && validatePattern(input)
                ? 'bg-[#9b088c] hover:bg-[#750667] text-white cursor-pointer'
                : 'bg-[#9b088c] text-[#750667] cursor-not-allowed'
            }`}
            disabled={input.length !== 7 || !validatePattern(input)}
          >
            Submit Code
          </button>
          {charactersRemaining > 0 && !warningMessage && (
            <p className="text-center text-[#9b088c] mt-2">
              Enter {charactersRemaining} more character{charactersRemaining !== 1 ? 's' : ''}.
            </p>
          )}
          {warningMessage && (
            <p className="text-red-500 mt-2">{warningMessage}</p>
          )}
          {!warningMessage && charactersRemaining <= 0 && (
            <p className="text-center text-[#9b088c] mt-2 invisible">Placeholder text</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ModalContent; 