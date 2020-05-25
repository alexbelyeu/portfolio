import React from "react"
import { Link } from "gatsby"


export const ProjectsNavItem = ({ children, to }) => {
  return (
    <Link
      className="transition-all ease-out duration-500 inline-block py-1 px-4 mr-4 bg-transparent text-white text-sm sm:text-md font-semibold border border-white rounded hover:bg-indigo-300 hover:text-white hover:border-transparent"
      activeClassName="transition-all ease-out duration-500 inline-block py-1 px-4 mr-4 bg-transparent bg-indigo-500 text-white text-sm sm:text-md font-semibold border-indigo-300 rounded cursor-default"
      to={to}
    >
      {children}
    </Link>
  )
}

export const ContactNavItem = ({ children, to, isContact }) => {
  return (
    <Link
      className="transition-all ease-out duration-500 inline-block py-1 px-4 bg-transparent text-white text-sm sm:text-md font-semibold border border-white rounded bg-green-500 hover:bg-green-300 hover:text-white hover:border-transparent"
      activeClassName="transition-all ease-out duration-500 inline-block py-1 px-4 bg-transparent bg-indigo-500 text-white text-sm sm:text-md font-semibold border-indigo-300 rounded cursor-default"
      to={to}
    >
      {children}
    </Link>
  )
}
