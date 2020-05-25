import React from 'react';

const NavBar = ({ children }) => {
  return (
    <div className="fixed w-full flex justify-end items-center px-8 bg-indigo-500 h-16 z-20 lg:z-10">
      {children}
    </div>
  )
};

export default NavBar;
