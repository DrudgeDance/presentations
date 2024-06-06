import React from 'react';
import evonikLogo from './../../../assets/icons/evonik.svg';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

function HiddenCustomInput({ input = '', setInput, showInput, setShowInput }) {
  // Define the size for the SVG images
  const svgSize = 16; // 16px size for each SVG icon

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Calculate the width of the input field to fit 2 more SVG icons
  const inputWidth = `calc((16 * 1ch) + 4rem)`; // 7 characters + 2 extra SVGs + padding for SVGs and hide/show icon

  return (
    <div className="relative">
      <input
        type={showInput ? 'text' : 'password'}
        value={input}
        onChange={handleInputChange}
        maxLength={8} // Adjust maxLength to handle up to 8 characters
        placeholder="Enter code"
        className="border border-[#9b088c] rounded transition-none focus:border focus:border-[#9b088c] focus:outline-none focus:ring-1 focus:ring-[#9b088c] placeholder-opacity-75 placeholder-[#d38cb8] pl-2 pr-10 py-2" // Adjusted padding
        autoComplete="new-input" // Use an uncommon value
        name="fake-input" // Use a generic name
        style={{
          width: inputWidth,
          letterSpacing: showInput ? 'normal' : (input ? '1.1em' : 'normal'), // Adjust letter-spacing only when input is not empty
          color: showInput ? 'black' : 'transparent', // Make text color transparent to hide bullets
          textShadow: showInput ? 'none' : '0 0 0 transparent', // Ensure text shadow is transparent
          WebkitTextSecurity: showInput ? 'none' : 'disc', // Hide text with bullets for Safari
          MozTextSecurity: showInput ? 'none' : 'disc', // Hide text with bullets for Firefox
          textSecurity: showInput ? 'none' : 'disc', // Hide text with bullets for other browsers
        }}
      />
      {!showInput && (
        <div className="absolute inset-0 flex items-center pl-2 pointer-events-none" style={{ zIndex: 2 }}>
          {input.split('').map((_, index) => (
            <img
              key={index}
              src={evonikLogo}
              alt=""
              className="w-4 h-4"
              style={{
                width: svgSize,
                height: svgSize,
                marginLeft: index === 0 ? '0.1em' : '0.5em', // Adjust margins to align SVGs correctly
              }}
            />
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setShowInput(!showInput)}
        className="absolute inset-y-0 right-0 pr-2 flex items-center text-[#9b088c]"
        style={{ zIndex: 3 }}
      >
        {showInput ? <EyeSlashIcon className="h-5 w-5 text-[#9b088c]" /> : <EyeIcon className="h-5 w-5 text-[#9b088c]" />}
      </button>
    </div>
  );
}

export default HiddenCustomInput;