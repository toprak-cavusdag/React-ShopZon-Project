import React from 'react';
import NavbarLeft from './navbarItem/NavbarLeft';
import NavbarRight from './navbarItem/NavbarRight';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center my-5'>
      <NavbarLeft />
      <NavbarRight />
    </nav>
  );
};

export default Navbar;
