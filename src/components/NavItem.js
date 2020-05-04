import React from "react"
import { Link } from "gatsby"

export const ContactNavItem = ({ children, to, isContact }) => {
  return (
    <Link
      className="transition-all ease-out duration-500 inline-block py-1 px-4 mx-4 bg-transparent text-white font-semibold border border-white rounded bg-teal-500 hover:bg-teal-300 hover:text-white hover:border-transparent"
      activeClassName="transition-all ease-out duration-500 inline-block py-1 px-4 mx-4 bg-transparent bg-red-500 text-white font-semibold border-red-300 rounded cursor-default"
      to={to}
    >
      {children}
    </Link>
  )
}

export const ProjectsNavItem = ({ children, to }) => {
  return (
    <Link
      className="transition-all ease-out duration-500 inline-block py-1 px-4 mx-4 bg-transparent text-white font-semibold border border-white rounded hover:bg-red-300 hover:text-white hover:border-transparent"
      activeClassName="transition-all ease-out duration-500 inline-block py-1 px-4 mx-4 bg-transparent bg-red-500 text-white font-semibold border-red-300 rounded cursor-default"
      to={to}
    >
      {children}
    </Link>
  )
}

