import React from 'react';

const NavBar = ({ children }) => {
  return (
    <div className="fixed w-full flex justify-end items-center py-2 px-2 bg-red-500 h-16 z-10 lg:z-0">
      {children}
    </div>
  )
};

export default NavBar;
