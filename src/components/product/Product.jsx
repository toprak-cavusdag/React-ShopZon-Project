import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='w-[400px] p-2 m-2 border rounded-lg relative cursor-pointer'>
      <div className='text-2xl font-bold absolute rounded-lg top-0 right-0 bg-emerald-500 text-white p-2 m-1'>
        {product?.price} <span className='text-sm'>TL</span>
      </div>
      <img
        className='w-[200px] h-[200px] object-cover mx-auto'
        src={product?.image}
        alt='product image'
      />
      <div className='text-center px-3 mt-3 text-xl font-semibold'>
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
