import React from "react"

import LayoutPortfolio from "../components/LayoutPortfolio"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <LayoutPortfolio>
    <SEO title="404: Not found" />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </LayoutPortfolio>
)

export default NotFoundPage
