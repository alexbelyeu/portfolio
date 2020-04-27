import React from "react"
import { Link } from "gatsby"

import LayoutPortfolio from "../components/LayoutPortfolio"
import SEO from "../components/seo"

const Contact = () => (
  <LayoutPortfolio>
    <SEO title="Say hi!" />
    <h1>Here you can contact me</h1>
    <Link to="/">Go back to the homepage</Link>
  </LayoutPortfolio>
)

export default Contact
