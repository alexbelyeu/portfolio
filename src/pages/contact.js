import React from "react"
import { Link } from "gatsby"

import LayoutPortfolio from "../components/LayoutPortfolio"
import SEO from "../components/seo"

const Contact = () => (
  <LayoutPortfolio>
    <SEO title="Say hi!" />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h1>Here you can contact me</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </LayoutPortfolio>
)

export default Contact
