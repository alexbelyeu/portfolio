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
        <div className="flex items-center justify-center bg-red-500 h-64">
          <div className="grid grid-rows-3 h-96 w-1/2 rounded-lg shadow-lg bg-gray-100">
            <div class="grid grid-cols-2 col-span-2 rounded-t-lg">
              <div className="grid justify-center items-center rounded-t-lg border-solid border-2 border-gray-300">Skills</div>
              <div className="grid justify-center items-center rounded-t-lg border-solid border-2 border-gray-300">Projects</div>
            </div>
            <div class="rounded-lg row-span-2 col-span-2"></div>
            {/* <div className="row-span-2"></div> */}
          </div>
        </div>
        <div className="flex items-center justify-center h-56">
        </div>
      </div>
    </LayoutPortfolio>
  )
}

export default IndexPage
