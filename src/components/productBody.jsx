import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCartSuccess, incCartItemQuantity } from "../context/actions";
import { store } from "../context/store";
import classes from "./productBody.module.css";
export const ProductBody = ({ product }) => {
  return (
    <div className={classes.productContainer}>
      <div className={classes.productImgContainer}>
        <img src={product.image} />
      </div>
      <div className={classes.productDetailContainer}>
        <h5 className={classes.productTitle}>{product.title}</h5>
        <div className={classes.productControl}>
          <Button classes={classes} product={product} />
        </div>
      </div>
    </div>
  );
};
const Button = ({ classes, product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartItem);
  const handleAddToCart = (product) => {
    if (!cartItems.some((e) => e.id === product.id)) {
      dispatch(addToCartSuccess(product));
    } else {
      dispatch(incCartItemQuantity(product.id));
    }
  };
  const handleBuyNow = (product) => {
    if (!cartItems.some((e) => e.id === product.id)) {
      dispatch(addToCartSuccess(product));
    }
    navigate("/cart");
  };
  return (
    <>
      <button
        style={{ textDecoration: "none" }}
        onClick={() => handleAddToCart(product)}
      >
        add to cart
      </button>
      <button
        style={{ textDecoration: "none" }}
        to={`/cart`}
        onClick={() => handleBuyNow(product)}
      >
        buy now
      </button>
    </>
  );
};
