import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PearLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "pear_logo.jpg" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktop: file(relativePath: { eq: "pear_logo.jpg" }) {
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

export default PearLogo
