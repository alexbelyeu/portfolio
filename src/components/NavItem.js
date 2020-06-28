import React from "react"
import { Link } from "gatsby"


export const ProjectsNavItem = ({ children, to }) => {
  return (
    <Link
      className="nav-button sm:text-md"
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
      className="nav-button sm:text-md bg-green-300 ml-4"
      activeClassName="bg-indigo-300 border-none cursor-default"
      to={to}
    >
      {children}
    </Link>
  )
}
