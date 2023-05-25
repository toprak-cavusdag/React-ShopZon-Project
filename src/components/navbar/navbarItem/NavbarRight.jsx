import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillBasket2Fill } from 'react-icons/bs';

const NavbarRight = () => {
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input
          type='text'
          className='bg-gray-200 outline-none'
          placeholder='Arama Yapınız...'
        />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div className='relative'>
        <div className='absolute -top-3 -right-3 bg-rose-600 flex justify-center items-center text-white font-semibold rounded-full w-5 h-5'>
          3
        </div>
        <BsFillBasket2Fill size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
