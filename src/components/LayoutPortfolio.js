import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import HeaderPortfolio from "./HeaderPortfolio"

const LayoutPortfolio = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HeaderPortfolio siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by me.
        </footer>
      </div>
    </>
  )
}

LayoutPortfolio.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutPortfolio
