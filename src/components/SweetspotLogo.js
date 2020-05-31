import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SweetspotLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "sweetspot_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop: file(relativePath: { eq: "sweetspot_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 205, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sources = [
    data.mobile.childImageSharp.fluid,
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return <Img alt="Sweetspot logo" fluid={sources} />
}

export default SweetspotLogo
