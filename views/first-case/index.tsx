import React, { FormEvent, useState } from 'react';

/**
 * @returns {JSX.Element} - First case of the first-case page
 */
export const FirstCase = () => {
  const [numbers, setNumbers] = useState<number[]>();
  const [letters, setLetters] = useState<string[]>();

  /**
   * @param input - Input element
   * @returns {boolean} - True if input is valid
   */
  const alphanumeric = (input: string) => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if (input.match(letterNumber)) {
      return true;
    } else {
      alert('Please enter alphanumeric characters only');
      return false;
    }
  };

  /**
   * @param event - Form event
   */
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNumbers([]);
    setLetters([]);
    const input: string = event.currentTarget.alphanumeric.value;
    if (alphanumeric(input)) {
      const inputArray = input.split('').sort();
      for (const alphanumeric of inputArray) {
        if (alphanumeric.match(/^[0-9]+$/)) {
          setNumbers((arr) => [...(arr || []), Number(alphanumeric)]);
        } else {
          setLetters((arr) => [...(arr || []), alphanumeric]);
        }
      }
    }
  };

  return (
    <div>
      <h3>First Case</h3>
      <label htmlFor="alphanumeric">
        Enter a string with only numbers and letters
      </label>
      <form onSubmit={submitForm} autoComplete="off">
        <input type="text" name="alphanumeric" />
        <button type="submit">Upload string</button>
      </form>
      <div className="row">
        <p className="p-first-case">Array of numbers:</p>
        <p>{numbers}</p>
      </div>
      <div className="row">
        <p className="p-first-case">Array of letters:</p>
        <p>{letters}</p>
      </div>
    </div>
  );
};
