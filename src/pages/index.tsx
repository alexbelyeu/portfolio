import React from "react"
import "../../tailwind.generated.css"
import Companies from "../components/Companies"
import Intro from "../components/Intro"
import LayoutPortfolio from "../components/LayoutPortfolio"
import ProjectsGrid from "../components/ProjectsGrid"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"

const IndexPage = () => {
  return (
    <LayoutPortfolio>
      <SEO title="Alex Belyeu" />
      <Intro />
      <ProjectsGrid />
      <Companies />
      <Testimonials />
    </LayoutPortfolio>
  )
}

export default IndexPage
