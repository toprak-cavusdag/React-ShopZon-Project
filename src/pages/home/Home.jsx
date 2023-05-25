import React, { useState } from 'react';
import SliderComp from '../../components/slider/SliderComp';
import Sorting from '../../components/sorting/Sorting';
import Category from '../../components/category/Category';
import Products from '../../components/products/Products';

const Home = () => {
  const [sort, setSort] = useState();
  const [category, setCategory] = useState();

  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className='flex'>
        <Category />
        <Products />
      </div>
    </div>
  );
};

export default Home;
