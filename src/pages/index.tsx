import React from "react"

import LayoutPortfolio from "../components/LayoutPortfolio"
import SEO from "../components/seo"
import threeLogo from "../images/three_logo.png"
import {
  HTML,
  CSS,
  JS,
  REACT,
  REACTNATIVE,
  D3,
  THREE,
  GATSBY,
  SHOOTERCOASTER,
  SOMRYST,
  PORTFOLIO,
  TAPJOY,
  SWEETSPOT,
  NETFLIX,
  SKILLS,
} from "../utils/constants"
import useClassNameReducer from "../utils/useClassNameReducer"
import "../../tailwind.generated.css"
import SkillItem from "../components/SkillItem"
import { skillsToItemsArray, projectsToItemsArray } from "../utils"

const IndexPage = () => {
  const [state, dispatch] = useClassNameReducer()
  console.log("CONSOLE.LOG: IndexPage -> state", state.classesToActivate)
  const focusRelevant = (e: React.MouseEvent): void => {
    dispatch({ type: "addClass", id: e.currentTarget.id })
  }

  const unfocusRelevant = (e: React.MouseEvent): void => {
    dispatch({ type: "removeClass", id: e.currentTarget.id })
  }

  return (
    <LayoutPortfolio>
      <SEO title="Alex Belyeu" />
      <div>
        <div className="flex items-center justify-center mt-16 mb-48 mx-10 sm:mx-20 md:mx-32">
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
          <div className="grid grid-rows-4 h-120 rounded-lg shadow-lg bg-gray-100 w-screen mx-5 sm:mx-12 md:mx-20 lg:mx-10">
            <div className="grid grid-cols-3 col-span-3 rounded-t-lg">
              <div className="grid col-span-1 justify-center items-center rounded-tl-lg">
                <div className="py-3 w-24 text-center border-b-2">
                  <p className="text-xl font-semibold">Skills</p>
                </div>
              </div>
              <div className="grid col-span-2 justify-center items-center rounded-tr-lg">
                <div className="py-3 w-24 text-center border-b-2">
                  <p className="text-xl font-semibold">Projects</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 col-span-3 row-span-4 rounded-b-lg">
              <div
                className="grid row-span-3 col-span-1"
                style={{ placeItems: "center" }}
              >
                {skillsToItemsArray.map(skillTuple => (
                  <SkillItem
                    id={skillTuple[0]}
                    initialClass="opacity-25 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100"
                    item={skillTuple[1]}
                    onMouseEnter={focusRelevant}
                    onMouseLeave={unfocusRelevant}
                    classesToActivate={state.classesToActivate}
                    activeClassName={state.activeClassName}
                  />
                ))}
              </div>
              <div
                className="grid grid-cols-2 col-span-2 row-span-3"
                style={{ placeItems: "center" }}
              >
                {projectsToItemsArray.map(projectTuple => (
                  <SkillItem
                    id={projectTuple[0]}
                    item={projectTuple[1]}
                    initialClass="text-teal-300 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100 hover:text-teal-500"
                    onMouseEnter={focusRelevant}
                    onMouseLeave={unfocusRelevant}
                    classesToActivate={state.classesToActivate}
                    activeClassName={state.activeClassName}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-56"></div>
      </div>
    </LayoutPortfolio>
  )
}

export default IndexPage
