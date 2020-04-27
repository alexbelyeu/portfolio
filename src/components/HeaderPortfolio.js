import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HeaderImage from "./HeaderImage"
import SpeechBubble from "./SpeechBubble"
import NavBar from "./NavBar"
import NavItem from "./NavItem"

const HeaderPortfolio = ({ siteTitle }) => (
  <div>
    <NavBar>
      <Link
        className="mr-auto mt-2 ml-8 bg-transparent text-white font-black py-0 px-4 "
        to="/"
      >
        AGB
      </Link>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </NavBar>
    <header className="flex w-screen items-center justify-center bg-red-500 curved">
      <HeaderImage />
      <div className="relative h-48 w-40">
        <SpeechBubble className="absolute h-32 w-40 -mt-8" />
        <div className="absolute ml-3 h-32 w-40 ml-10">
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
