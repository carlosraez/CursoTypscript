import { useState } from 'react';
export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  /**
   * Increment counter plus value
   * @param value number
   * @returns void
   */
  const handleIncrement = (value: number) => setCounter(counter + value);
  /**
   * Decrement counter minus value
   * @param value number
   * @returns void
   */
  const handleDecrement = (value: number) => setCounter(counter - value);
  return (
    <>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <button onClick={() => handleIncrement(1)} className="btn btn-primary">
        +1
      </button>
      &nbsp;
      <button onClick={() => handleDecrement(1)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
