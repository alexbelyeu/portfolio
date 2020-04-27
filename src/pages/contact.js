import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Say hi!" />
    <h1>Here you can contact me</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
