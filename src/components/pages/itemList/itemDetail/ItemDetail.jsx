import React from "react";
import CounterContainer from "../../../common/Counter/CounterContainer";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <Card className="card" sx={{ Width: 400, height: 600, backgroundColor: "primary" }}>
      <CardMedia sx={{ height: 250 }} image={product.img} title={product.title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" component="div">
          Precio: {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <CounterContainer
          cantidadEnCarrito={cantidadEnCarrito}
          stock={product.stock}
          agregarAlCarrito={agregarAlCarrito}
        />
      </CardActions>
    </Card>
  );
};

export default ItemDetail;
