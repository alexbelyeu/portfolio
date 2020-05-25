import { Link } from "gatsby"
import React from "react"
import "../../tailwind.generated.css"
import Histogram from "../components/Histogram"
import LayoutPortfolio from "../components/LayoutPortfolio"
import ProjectsGrid from "../components/ProjectsGrid"
import ScatterPlot from "../components/ScatterPlot"
import SEO from "../components/seo"
import netflixData from "../data/netflix_shows.json"

const filteredData = netflixData.filter(d => !isNaN(d.userRatingScore))
const Projects = () => (
  <LayoutPortfolio>
    <SEO title="Projects" />
    <div className="my-48">
      <ProjectsGrid />
    </div>
    <div>
      <h1>Here go the projects</h1>
      <div className="my-4 shadow-xl hover:bg-gray-100" key={0}>
        <ScatterPlot id={0} width={950} dataset={filteredData} />
      </div>
      <div className="shadow-xl hover:bg-gray-100" key={1}>
        <Histogram id={1} width={950} dataset={filteredData} />
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </LayoutPortfolio>
)

export default Projects
