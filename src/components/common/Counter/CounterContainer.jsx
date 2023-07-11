import useCounter from "../../../utils/useCounter";
import Counter from "./Counter";

const CounterContainer = ({ agregarAlCarrito, stock }) => {
  const { counter, sumar, restar } = useCounter(1, stock);
  return (
    <Counter
      counter={counter}
      sumar={sumar}
      restar={restar}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export default CounterContainer;
