import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.products);

  console.log(products, 'Products');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>Product</div>;
};

export default Products;
