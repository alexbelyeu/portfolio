import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"

import Menu from "./Menu"

export const ProjectsNavItem = ({ children }) => {
  const wrapperRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const menuButton = document.querySelector("#menu-button")
    showMenu
      ? menuButton.classList.add("bg-indigo-300", "border-none")
      : menuButton.classList.remove("bg-indigo-300", "border-none")
  }, [showMenu])

  useEffect(() => {
    const handleClick = e => {
      e.preventDefault()
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        // Click outside of the menu
        setShowMenu(false)
      }
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [wrapperRef])

  return (
    <div ref={wrapperRef}>
      <button
        id="menu-button"
        onClick={() => setShowMenu(!showMenu)}
        className="nav-button px-2 flex justify-around items-center sm:text-md outline-none"
      >
        <div className="w-5 h-5 flex justify-center items-center">
          <FontAwesomeIcon
            icon={showMenu ? faChevronUp : faChevronDown}
            className="text-indigo-900 absolute text-sm"
          />
        </div>
        <span>{children}</span>
      </button>
      {showMenu && <Menu />}
    </div>
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
