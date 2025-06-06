
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  // console.log(cat,filters,sort);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8000/api/products?category=${cat}`
            : "http://localhost:8000/api/products"
          );
          // console.log(res.data);
          setProducts(res.data.products);
      } catch (error) {
        
      }
    }
    getProducts();
  },[cat]);
  // console.log(products);
  
  // useEffect(() => {
  //   if (cat && Array.isArray(products)) {
  //     setFilteredProducts(
  //       console.log(products),
  //       products.filter((item) =>
  //         Object.entries(filters).every(([key, value]) =>
  //           item[key].includes(value)
  //         )
  //       )
  //     );
  //   }
  // }, [products, cat, filters]);
  

  return (
    <Container>
      {/*{filteredProducts.map((item) => (
        
      ))}*/}
      {
        products.map((item) => (
          <Product item={item} key={item._id} />
        ))
      }
    </Container>
  );
};

export default Products;
