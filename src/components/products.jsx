import products from "./tempData";

import classes from "./products.module.css";
import { ProductBody } from "./productBody";
export const Products = () => {
  return (
    <div  className={classes.productsContainer}>
      {products.map((product) => {
        return <ProductBody  key={product.id} product={product} />;
      })}
    </div>
  );
};
