import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import cartClasses from "./cart.module.css";
// import { CartPage } from "./cartPage";

import classes from "./products.module.css";
export const Cart = () => {
  const cartItems = useSelector((store) => store.cartItem);

  return cartItems.length === 0 ? (
    <div>
      <h3>Your cart is empty😰</h3>
      <Link to={"/products"}>Visit store</Link>
    </div>
  ) : (
    <div className={classes.productsContainer}>
      {cartItems.map((e) => (
        <CartPage key={e.id} product={e} />
      ))}
    </div>
  );
};

const CartPage = ({ product }) => {
  return (
    <div className={cartClasses.cartContainer}>
      <div className={cartClasses.cartImgContainer}>
        <img src={product.image} />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.quantity}</p>
      </div>
    </div>
  );
};
