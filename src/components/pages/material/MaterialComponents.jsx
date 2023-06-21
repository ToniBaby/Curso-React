import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const MaterialComponents = () => {
  return (
    <div>
      <Badge badgeContent={8} color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
      <h1>hola material</h1>
    </div>
  );
};

export default MaterialComponents;
