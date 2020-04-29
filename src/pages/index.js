import React from "react"

import LayoutPortfolio from "../components/LayoutPortfolio"
import SEO from "../components/seo"
import "../../tailwind.generated.css"

const IndexPage = () => {
  return (
    <LayoutPortfolio>
      <SEO title="Alex Belyeu" />
      <div>
        <div className="flex items-center justify-center mt-16 mb-32 mx-10 sm:mx-20 md:mx-32">
          <p className="text-lg">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="flex items-center justify-center bg-red-500 h-56">
          <div className="border-solid border-4 border-gray-600 h-64 w-1/2"></div>
        </div>
      </div>
    </LayoutPortfolio>
  )
}

export default IndexPage
