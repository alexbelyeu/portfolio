import React from "react"
import { Link } from "gatsby"


import LayoutPortfolio from "../components/LayoutPortfolio"
import SEO from "../components/seo"
import "../../tailwind.generated.css"

const Contact = () => (
  <LayoutPortfolio>
    <SEO title="Say hi!" />
    <div>
      <h1>Here you can contact me</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </LayoutPortfolio>
)

export default Contact
