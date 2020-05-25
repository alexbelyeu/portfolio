import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SweetspotLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "sweetspot_logo.png" }) {
        childImageSharp {
          fixed(width: 103, height: 15) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktop: file(relativePath: { eq: "sweetspot_logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const sources = [
    data.mobile.childImageSharp.fixed,
    {
      ...data.desktop.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ]

  return <Img fixed={sources} />
}

export default SweetspotLogo
