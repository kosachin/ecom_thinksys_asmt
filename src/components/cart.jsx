import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ProductBody } from "./productBody";

import classes from "./products.module.css";
export const Cart = () => {
  const cart = useSelector((store) => store.cartItem);

  return cart.length === 0 ? (
    <div>
      <h3>Your cart is empty😰</h3>
      <Link to={"/products"}>Visit store</Link>
    </div>
  ) : (
    <div className={classes.productsContainer}></div>
  );
};
