import React from 'react';

const NavBar = ({ children }) => {
  return (
    <div id="nav-bar" className="transition-el opacity-100 absolute lg:fixed w-full flex items-center h-16 px-4 sm:px-8 z-20 lg:z-10">
      {children}
    </div>
  )
};

export default NavBar;
