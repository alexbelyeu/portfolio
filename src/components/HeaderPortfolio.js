import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import alexGif from "../images/alex_gif.gif"
import NavBar from "./NavBar"
import { ContactNavItem, ProjectsNavItem } from "./NavItem"
import SpeechBubbleSvg from "./svgs/SpeechBubbleSvg"

const HeaderPortfolio = () => {
  return (
    <div>
      <NavBar>
        <Link
          className="mr-auto bg-transparent text-indigo-900 font-extrabold"
          to="/"
        >
          AGB
        </Link>
        <ProjectsNavItem>Projects</ProjectsNavItem>
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
