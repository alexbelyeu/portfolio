import React from "react"
import "../../tailwind.generated.css"
import Histogram from "../components/Histogram"
import LayoutPortfolio from "../components/LayoutPortfolio"
import ScatterPlot from "../components/ScatterPlot"
import SEO from "../components/seo"
import netflixData from "../data/netflix_shows.json"

const filteredData = netflixData.filter(d => !isNaN(d.userRatingScore))
const Netflix = () => (
  <LayoutPortfolio>
    <SEO title="Netflix" />
    <div className="flex flex-col justify-center items-center my-4">
      <div className="my-4 shadow-xl bg-white" key={0}>
        <ScatterPlot id={0} width={950} dataset={filteredData} />
      </div>
      <div className="shadow-xl bg-white" key={1}>
        <Histogram id={1} width={950} dataset={filteredData} />
      </div>
    </div>
  </LayoutPortfolio>
)

export default Netflix
