import {useSelector,useDispatch } from "react-redux";
import axios from "axios";

import { setProducts } from "../redux/actions/productsActions";
import ProductComponents from "./ProductComponents";
import { useEffect } from "react";

 
const ProductPage = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setProducts(response.data));
    console.log('a',response);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    console.log("Products :", products);
    return (
      <div className="ui grid container">
       <ProductComponents/>
      </div>
    );
  };
  
  export default ProductPage;


