import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductBody } from "./productBody";
import { Error } from "./error";
import products from "./tempData";

const getOneProduct = (id) => products.filter((e) => e.id === +id);
export const Product = () => {
  const { prodId } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const product = getOneProduct(prodId);
    setData(product);
    // console.log(product)
  }, []);
  return data.length? <ProductBody product={data[0]} /> : <Error />;
};
