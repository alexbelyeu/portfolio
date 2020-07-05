import React from "react"
import GridItem from "./GridItem"
import { projectsToGifsArray, skillsToItemsArray } from "../utils"
import useClassNameReducer from "../utils/useClassNameReducer"

const ProjectsGrid = () => {
  const [state, dispatch] = useClassNameReducer()
  const focusRelevant = (e: React.MouseEvent): void => {
    dispatch({ type: "addClass", id: e.currentTarget.id })
  }

  const unfocusRelevant = (e: React.MouseEvent): void => {
    dispatch({ type: "removeClass", id: e.currentTarget.id })
  }

  return (
    <div
      id="projects"
      className="flex items-center justify-center bg-indigo-500 h-64"
    >
      <div className="grid grid-rows-4 h-120 rounded-lg shadow-2xl bg-gray-100 w-screen mx-5 sm:mx-12 md:mx-20 lg:mx-10">
        <div className="grid grid-cols-3 col-span-3 rounded-t-lg">
          <div className="grid col-span-1 justify-center items-center rounded-tl-lg">
            <div className="py-3 w-24 text-center border-b-2 border-green-500">
              <p className="text-xl text-green-500 font-semibold">Tools</p>
            </div>
          </div>
          <div className="grid col-span-2 justify-center items-center rounded-tr-lg">
            <div className="py-3 w-24 text-center border-b-2 border-green-500">
              <p className="text-xl text-green-500 font-semibold">Projects</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 col-span-3 row-span-4 rounded-b-lg">
          <div
            className="grid row-span-3 col-span-1"
            style={{ placeItems: "center" }}
          >
            {skillsToItemsArray.map((skillTuple, index) => (
              <GridItem
                onMouseEnter={focusRelevant}
                onMouseLeave={unfocusRelevant}
                activeClassName={state.activeClassName}
                inactiveClassName={state.inactiveClassName}
                id={skillTuple[0]}
                key={`${index}${skillTuple[0]}`}
                item={skillTuple[1]}
                itemsToActivate={state.itemsToActivate}
                itemsToDeactivate={state.itemsToDeactivate}
              />
            ))}
          </div>
          <div
            className="grid row-span-3 col-span-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ placeItems: "center" }}
          >
            {projectsToGifsArray.map((projectTuple, index) => (
              <GridItem
                onMouseEnter={focusRelevant}
                onMouseLeave={unfocusRelevant}
                activeClassName={state.activeClassName}
                inactiveClassName={state.inactiveClassName}
                id={projectTuple[0]}
                key={`${index}${projectTuple[0]}`}
                item={projectTuple[1]}
                itemsToActivate={state.itemsToActivate}
                itemsToDeactivate={state.itemsToDeactivate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsGrid
