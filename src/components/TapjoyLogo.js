import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TapjoyLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "tapjoy_logo.png" }) {
        childImageSharp {
          fixed(width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktop: file(relativePath: { eq: "tapjoy_logo.png" }) {
        childImageSharp {
          fixed(width: 250) {
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

export default TapjoyLogo
