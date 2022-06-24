import React, { FormEvent, useState } from 'react';

/**
 * @returns {JSX.Element} - Second case of the second-case page
 */
export const SecondCase = () => {
  const [message, setMessage] = useState<string>();

  /**
   * @param event - Form event
   */
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const phrase: string = event.currentTarget.phrase.value
      .split('')
      .join('')
      .toLowerCase();
    const reversePhrase = phrase.split('').reverse().join('');

    if (phrase === reversePhrase) {
      setMessage('The word is a palindrome');
    } else {
      setMessage('The word is not a palindrome');
    }
  };
  return (
    <div>
      <h3>Second Case</h3>
      <form onSubmit={submitForm} autoComplete="off">
        <label htmlFor="phrase">Enter a string to know if is palindrome</label>
        <input type="text" name="phrase" />
        <button type="submit">Upload string</button>
      </form>
      <p className={message?.includes('not') ? 'p-bad' : 'p-good'}>{message}</p>
    </div>
  );
};
