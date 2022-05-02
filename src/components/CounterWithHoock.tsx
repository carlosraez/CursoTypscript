import { useCounter } from '../hooks/useCounter';
export const CounterWithHoock = () => {
  const { handleDecrement, handleIncrement, counter } = useCounter(4);
  return (
    <>
      <h3>
        Counter with hook: <small>{counter}</small>
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
