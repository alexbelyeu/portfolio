import React from "react"
import "../../tailwind.generated.css"
import Companies from "../components/Companies"
import Intro from "../components/Intro"
import LayoutPortfolio from "../components/LayoutPortfolio"
import ProjectsGrid from "../components/ProjectsGrid"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <LayoutPortfolio>
      <SEO title="Alex Belyeu" />
      <Intro />
      <ProjectsGrid />
      <Companies />
    </LayoutPortfolio>
  )
}

export default IndexPage
