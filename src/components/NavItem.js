import React from "react"
import { Link } from "gatsby"


export const ProjectsNavItem = ({ children, to }) => {
  return (
    <Link
      className="nav-button sm:text-md hover:bg-indigo-300 hover:border-none"
      activeClassName="bg-indigo-300 border-none cursor-default"
      to={to}
    >
      {children}
    </Link>
  )
}

export const ContactNavItem = ({ children, to, isContact }) => {
  return (
    <Link
      className="nav-button sm:text-md hover:bg-indigo-300 hover:border-none bg-green-300 ml-4"
      activeClassName="bg-indigo-300 border-none cursor-default"
      to={to}
    >
      {children}
    </Link>
  )
}
