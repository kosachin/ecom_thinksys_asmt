import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCartSuccess } from "../context/actions";
import classes from "./productBody.module.css";
export const ProductBody = ({ product }) => {
  return (
    <div className={classes.productContainer}>
      <div className={classes.productImgContainer}>
        <img src={product.image} />
      </div>
      <div className={classes.productDetailContainer}>
        <h5 className={classes.productTitle}>{product.title}</h5>
        <Button classes={classes} product={product} />
      </div>
    </div>
  );
};
const Button = ({ classes }, product) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCartSuccess(product));
  };
  return (
    <div className={classes.productControl}>
      <button
        style={{ textDecoration: "none" }}
        onClick={() => handleAddToCart(product)}
      >
        add to cart
      </button>
      <Link style={{ textDecoration: "none" }} to={`/products/${product.id}`}>
        buy now
      </Link>
    </div>
  );
};
