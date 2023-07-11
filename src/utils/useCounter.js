import { useState } from "react";

const useCounter = (initial = 0, maximo) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    // counter < maximo && setCounter( counter + 1)

    if (counter < maximo) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const resetear = () => {
    setCounter(initial);
  };

  return { counter, sumar, restar, resetear };
};

export default useCounter;
