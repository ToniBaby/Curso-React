import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ item }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small">Ver Detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
