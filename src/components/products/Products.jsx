import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryProducts,
  getProducts,
} from '../../redux/productSlice/productSlice';
import Loading from '../loader/Loading';
import Product from '../product/Product';
import ReactPaginate from 'react-paginate';

const Products = ({ category }) => {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  return (
    <div>
      {productStatus == 'LOADING' ? (
        <Loading />
      ) : (
        <>
          <div className='flex flex-wrap justify-center items-center'>
            {currentItems.map((product, i) => {
              return (
                <>
                  <Product key={i} product={product} />
                </>
              );
            })}
          </div>

          <ReactPaginate
            className='paginate space-x-4 font-bold my-2'
            breakLabel='...'
            nextLabel='>'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='<'
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
