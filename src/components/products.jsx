import tempData from "./tempData";
import { fetchAllDataRequest, fetchAllDataSuccess } from "../context/actions";

import classes from "./products.module.css";
import { ProductBody } from "./productBody";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export const Products = () => {
  const products = useSelector((store) => store.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllDataRequest(tempData));
    dispatch(fetchAllDataSuccess(tempData));
  }, []);
  return (
    <div className={classes.productsContainer}>
      {products.map((product) => {
        return <ProductBody key={product.id} product={product} />;
      })}
    </div>
  );
};
