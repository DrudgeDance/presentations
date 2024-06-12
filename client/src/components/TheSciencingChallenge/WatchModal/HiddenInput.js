import React from 'react';
import evonikLogo from './../../../assets/images/evonik.svg';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

function HiddenCustomInput({ input = '', setInput, showInput, setShowInput }) {
  const svgSize = 16; // 16px size for each SVG icon

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const inputWidth = `calc((18 * 1ch) + 4rem)`; // 7 characters + 2 extra SVGs + padding for SVGs and hide/show icon

  return (
    <div className="relative">
      <input
        type={showInput ? 'text' : 'password'}
        value={input}
        onChange={handleInputChange}
        maxLength={8} // Ensures no more than 8 characters can be input
        placeholder="Enter code"
        className="border border-[#9b088c] rounded transition-none focus:border focus:border-[#9b088c] focus:outline-none focus:ring-1 focus:ring-[#9b088c] placeholder-opacity-75 placeholder-[#d38cb8] pl-2 pr-10 py-2"
        autoComplete="new-input"
        name="fake-input"
        style={{
          width: inputWidth,
          letterSpacing: showInput ? 'normal' : (input ? '1.1em' : 'normal'),
          color: showInput ? 'black' : 'transparent',
          textShadow: showInput ? 'none' : '0 0 0 transparent',
          WebkitTextSecurity: showInput ? 'none' : 'disc',
          MozTextSecurity: showInput ? 'none' : 'disc',
          textSecurity: showInput ? 'none' : 'disc',
        }}
      />
      {!showInput && (
        <div className="absolute inset-0 flex items-center pl-2 pointer-events-none" style={{ zIndex: 2 }}>
          {input.split('').map((_, index) => (
            index < 8 && <img // Only show SVGs for the first 7 characters
              key={index}
              src={evonikLogo}
              alt=""
              className="w-4 h-4"
              style={{ width: svgSize, height: svgSize, marginLeft: index === 0 ? '0.1em' : '0.5em' }}
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
