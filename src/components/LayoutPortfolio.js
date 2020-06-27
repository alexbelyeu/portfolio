import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Footer from "./Footer"
import HeaderPortfolio from "./HeaderPortfolio"
import { handleNavBarVisibility } from "../utils/handleNavBarVisibility"

const LayoutPortfolio = ({ children }) => {
  useEffect(handleNavBarVisibility, [])

  return (
    <>
      <HeaderPortfolio />
      <main>{children}</main>
      <Footer />
    </>
  )
}

LayoutPortfolio.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutPortfolio
