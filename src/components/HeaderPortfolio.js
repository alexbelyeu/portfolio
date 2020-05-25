import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import alexGif from "../images/alex_gif.gif"
import NavBar from "./NavBar"
import { ContactNavItem, ProjectsNavItem } from "./NavItem"
import SpeechBubbleSvg from "./svgs/SpeechBubbleSvg"

const HeaderPortfolio = () => (
  <div>
    <NavBar>
      <Link
        className="mr-auto mt-2 bg-transparent text-white font-black"
        to="/"
      >
        AGB
      </Link>
      <ProjectsNavItem to="/projects">Projects</ProjectsNavItem>
      <ContactNavItem to="/contact">Contact</ContactNavItem>
    </NavBar>
    <header className="curved flex items-center justify-center bg-indigo-500 h-64 lg:h-56">
      <img src={alexGif} alt="alex gif" className="w-64 mt-32 lg:mt-24 z-10" />
      <div className="h-64 w-40 -ml-16 z-10 mt-32 lg:mt-20">
        <SpeechBubbleSvg className="absolute h-32 w-48" />
        <div className="absolute h-32 ml-12 mt-8">
          <h1 className="text-lg text-white">Hi!</h1>
          <h2 className="pt-1 text-md text-white font-hairline">
            I'm Alex Belyeu
          </h2>
        </div>
      </div>
    </header>
  </div>
)

HeaderPortfolio.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderPortfolio.defaultProps = {
  siteTitle: ``,
}

export default HeaderPortfolio
