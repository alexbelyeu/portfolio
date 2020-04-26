import React from "react"
import { Link } from "gatsby"

import netflixData from '../data/netflix_shows.json';
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ScatterPlot from "../components/ScatterPlot";
import Histogram from "../components/Histogram";
import "../../tailwind.generated.css"

const IndexPage = () => {  
  const filteredData = netflixData.filter(d => !isNaN(d.userRatingScore))
  return (
    <Layout>
      <SEO title="Home" />
      <div className="my-4 card" key={0}>
        <ScatterPlot id={0} width={950} dataset={filteredData} />
      </div>
      <div className="card" key={1}>
        <Histogram id={1} width={950} dataset={filteredData} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
