import React from 'react';

const Sorting = () => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex justify-end items-center'>
      <select name='' id='' className='bg-white py-3 px-2'>
        <option disabled value=''>
          Seçiniz..
        </option>
        <option value='inc'>Artan</option>
        <option value='dec'>Artan</option>
      </select>
    </div>
  );
};

export default Sorting;
