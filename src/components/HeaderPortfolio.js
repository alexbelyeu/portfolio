import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HeaderImage from "./HeaderImage"
import SpeechBubbleSvg from "./svgs/SpeechBubbleSvg"
import NavBar from "./NavBar"
import { ProjectsNavItem, ContactNavItem } from "./NavItem"

const HeaderPortfolio = ({ siteTitle }) => (
  <div>
    <NavBar>
      <Link
        className="mr-auto mt-2 ml-8 bg-transparent text-white font-black py-0 px-4 "
        to="/"
      >
        AGB
      </Link>
      <ProjectsNavItem to="/projects">Projects</ProjectsNavItem>
      <ContactNavItem to="/contact">Contact</ContactNavItem>
    </NavBar>
    <header className="flex items-center justify-center bg-red-500 curved h-96 lg:h-64">
      <HeaderImage />
      <div className="h-64 w-40">
        <SpeechBubbleSvg className="absolute h-32 w-40" />
        <div className="absolute h-32 ml-10 mt-8">
          <h1 className="text-lg text-white">Hi!</h1>
          <h2 className="pt-1 text-sm text-white font-hairline">
            I'm Alex Belyeu
          </h2>
        </div>
      </div>
      {/* <div className="my-0 mx-auto">
      <h1>
        <Link
          to="/"
          style={{ color: `white` }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
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
