import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./productBody.module.css";
export const ProductBody = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.productContainer}>
      <div className={classes.productImgContainer}>
        <img src={product.image} />
      </div>
      <div className={classes.productDetailContainer}>
        <h5 className={classes.productTitle}>{product.title}</h5>
        <div className={classes.productControl}>
          <button onClick={()=>navigate(-1)}>Add to cart</button>
          {/* <Link
            style={{ textDecoration: "none" }}
            to={`/products/${product.id}`}
          >
            buy now
          </Link> */}
          <button
            style={{ textDecoration: "none" }}
            to={`/products/${product.id}`}
          >
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};
