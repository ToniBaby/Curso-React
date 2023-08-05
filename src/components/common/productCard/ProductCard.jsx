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
    <div className="cardContainer">
      <Card
        className="card"
        sx={{ Width: 300, height: 400, backgroundColor: "primary" }}
      >
        <CardMedia sx={{ height: 250 }} image={item.img} title={item.title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button color="success" size="small">Ver Detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
