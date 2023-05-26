import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice/categorySlice';

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className='w-1/6 bg-gray-100 p-4  max-h-screen'>
      <div className='border-b pb-1 font-bold px-2 text-xl'>Kategoriler</div>
      {categories?.map((cate, i) => {
        return (
          <div
            onClick={() => setCategory(cate)}
            className='text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2'
            key={i}
          >
            {cate}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
