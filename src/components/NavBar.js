import React from 'react';

const NavBar = ({ children }) => {
  return (
    <div className="fixed w-screen flex justify-end items-center py-2 px-2 bg-red-500 h-16">
      {children}
    </div>
  )
};

export default NavBar;
