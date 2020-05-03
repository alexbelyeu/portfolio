import React from "react"
import { Link } from "gatsby"

import netflixData from "../data/netflix_shows.json"

import ScatterPlot from "../components/ScatterPlot"
import Histogram from "../components/Histogram"
import LayoutPortfolio from "../components/LayoutPortfolio"
import SEO from "../components/seo"
import "../../tailwind.generated.css"

const filteredData = netflixData.filter(d => !isNaN(d.userRatingScore))
const Projects = () => (
  <LayoutPortfolio>
    <SEO title="Projects" />
    <div>
      <h1>Here go the projects</h1>
      <div className="my-4 card" key={0}>
        <ScatterPlot id={0} width={950} dataset={filteredData} />
      </div>
      <div className="card" key={1}>
        <Histogram id={1} width={950} dataset={filteredData} />
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </LayoutPortfolio>
)

export default Projects
