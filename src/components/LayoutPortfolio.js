import PropTypes from "prop-types"
import React from "react"
import Footer from "./Footer"
import HeaderPortfolio from "./HeaderPortfolio"

const LayoutPortfolio = ({ children }) => {
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
