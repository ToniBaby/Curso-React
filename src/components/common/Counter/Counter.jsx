import { Button } from "@mui/material";

const Counter = ({ counter, agregarAlCarrito, stock, sumar, restar }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Button disabled={counter <= 1} variant="contained" onClick={restar}>
          -
        </Button>
        <h2>{counter}</h2>
        <Button disabled={counter >= stock} variant="contained" onClick={sumar}>
          +
        </Button>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => agregarAlCarrito(counter)}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default Counter;
