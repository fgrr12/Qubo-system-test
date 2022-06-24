import React, { FormEvent, useState } from 'react';

/**
 * @returns {JSX.Element} - Third case of the third-case page
 */
export const ThirdCase = () => {
  const [message, setMessage] = useState<string[]>();

  const tower = (
    source: string,
    extra: string,
    destination: string,
    size: number
  ) => {
    if (size <= 0) {
      return;
    }
    tower(source, destination, extra, size - 1);

    setMessage((arr) => [
      ...(arr || []),
      `MOVE DISK-${size} FROM ${source} TO ${extra}`,
    ]);

    tower(destination, extra, source, size - 1);
  };

  /**
   * @param event - Form event
   */
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage([]);
    const size: number = event.currentTarget.size.value;
    tower('STICK 1', 'STICK 2', 'STICK 3', size);
  };
  return (
    <div>
      <h3>Third Case</h3>
      <label htmlFor="size">Enter the size of the tower</label>
      <form onSubmit={submitForm} autoComplete="off">
        <input type="text" name="size" />
        <button type="submit">Upload tower size</button>
      </form>
      {message && message.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
};
