import React from "react"

import LayoutPortfolio from "../components/LayoutPortfolio"
import SEO from "../components/seo"
import "../../tailwind.generated.css"

const NotFoundPage = () => (
  <LayoutPortfolio>
    <SEO title="404: Not found" />
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </LayoutPortfolio>
)

export default NotFoundPage
