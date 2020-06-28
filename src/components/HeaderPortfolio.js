import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import alexGif from "../images/alex_gif.gif"
import NavBar from "./NavBar"
import { ContactNavItem, ProjectsNavItem } from "./NavItem"
import SpeechBubbleSvg from "./svgs/SpeechBubbleSvg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faChevronUp,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"

const HeaderPortfolio = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const menuButton = document.querySelector("#menu-button")
    showMenu
      ? menuButton.classList.add("bg-indigo-300", "border-none")
      : menuButton.classList.remove("bg-indigo-300", "border-none")
  }, [showMenu])

  return (
    <div>
      <NavBar>
        <Link
          className="mr-auto bg-transparent text-indigo-900 font-extrabold"
          to="/"
        >
          AGB
        </Link>
        <div id="menu">
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
            <span>Projects</span>
          </button>
          {showMenu && (
            <div className="absolute bg-indigo-300 mt-1 flex flex-col justify-around w-48 h-48 rounded-sm shadow-xl">
              <a
                href="/projects"
                className="px-2 h-full flex justify-between items-center hover:bg-indigo-200 rounded-t-sm"
              >
                Netflix Study
              </a>
              <a
                href=""
                className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200"
              >
                Shooter Coaster 3D
                <div className="w-5 h-5 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="text-indigo-900 absolute text-sm"
                  />
                </div>
              </a>
              <a
                href=""
                className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200"
              >
                Somryst
                <div className="w-5 h-5 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="text-indigo-900 absolute text-sm"
                  />
                </div>
              </a>
              <a
                href=""
                className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200"
              >
                Sweetspot
                <div className="w-5 h-5 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="text-indigo-900 absolute text-sm"
                  />
                </div>
              </a>
              <a
                href=""
                className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200"
              >
                Slack Jukebox
                <div className="w-5 h-5 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="text-indigo-900 absolute text-sm"
                  />
                </div>
              </a>
              <a
                href=""
                className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200 rounded-b-sm"
              >
                Tapjoy
                <div className="w-5 h-5 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="text-indigo-900 absolute text-sm"
                  />
                </div>
              </a>
            </div>
          )}
        </div>
        <ContactNavItem to="/contact">Contact</ContactNavItem>
      </NavBar>
      <header
        id="header"
        className="curved flex items-center justify-center bg-indigo-100 h-64 lg:h-56"
      >
        <img
          src={alexGif}
          alt="alex gif"
          className="w-48 -ml-20 md:ml-0 mt-32 lg:mt-24 z-10"
        />
        <div className="h-64 w-32 -ml-16 md:-ml-16 z-10 mt-32 lg:mt-20">
          <SpeechBubbleSvg className="absolute h-32 w-48" />
          <div className="absolute h-32 ml-16 mt-8">
            <h1 className="text-xl font-extrabold text-indigo-900">Hi!</h1>
            <h1 className="pt-1 text-lg font-extrabold text-indigo-900">
              I'm Alex.
            </h1>
          </div>
        </div>
      </header>
    </div>
  )
}

HeaderPortfolio.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderPortfolio.defaultProps = {
  siteTitle: ``,
}

export default HeaderPortfolio
