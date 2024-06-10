// validationHelpers.js

const maxChar = 7;

export const initialCharacterMessage = `Enter ${maxChar} more characters.`;

export const validatePartialPattern = (code) => {
  return /^[A-Za-z]{3}[0-9]{0,4}$|^[A-Za-z]{1,2}$/.test(code);
};

export const validateFullPattern = (code) => {
    return /^[A-Za-z]{3}[0-9]{4}$/.test(code);
};

export const updateCharacterMessage = (length) => {
    if (length > 0 && length < maxChar) {
        return `Enter ${maxChar - length} more characters.`;
    } else {
        return '';
    }
};

export const generateFeedback = (input) => {
    const length = input.length;
    if (length === 0) {
        return initialCharacterMessage;
    } else if (length > 0 && length <= maxChar) {
        if (!validatePartialPattern(input)) {
            return 'Warning: Verify code pattern.';
        } else {
            return updateCharacterMessage(length);
        }
    } else if (length >= maxChar+1) {
        return 'Warning: Verify code length.';
    }
};