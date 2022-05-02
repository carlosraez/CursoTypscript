import { useState } from 'react';

export const useCounter = (incitialState: number = 12) => {
  const [counter, setCounter] = useState<number>(incitialState);

  /**
   * Increment counter plus value
   * @param {number}
   */
  const handleIncrement = (value: number) => setCounter(counter + value);
  /**
   * Decrement counter minus value
   * @param {number}
   */
  const handleDecrement = (value: number) => setCounter(counter - value);
  return {
    handleIncrement,
    handleDecrement,
    counter,
  };
};
