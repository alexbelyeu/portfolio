import { useReducer } from "react"
import { projectToSkillsMap } from "."
import {
  skillsToProjectsMap,
  SKILLS,
  PROJECTS,
  SKILLSANDPROJECTS,
} from "./constants"

type ClassNameType = {
  activeClassName: string
  itemsToActivate: string[]
  itemsToDeactivate: string[]
}
type ActionType = {
  type: string
  id: string
}
const useClassNameReducer = (): [ClassNameType, ActionType | any] => {
  const initialState: ClassNameType = {
    activeClassName: "",
    itemsToActivate: [],
    itemsToDeactivate: [],
  }
  const reducer = (state: ClassNameType, action: ActionType): ClassNameType => {
    switch (action.type) {
      case "addClass": {
        const isSkill = Object.keys(skillsToProjectsMap).includes(action.id)
        const activeClassName = isSkill
          ? "md:scale-125"
          : "scale-125 opacity-100"
        const itemsToActivate = isSkill
          ? [...skillsToProjectsMap[action.id], action.id]
          : [...projectToSkillsMap[action.id], action.id]
        const itemsToDeactivate = SKILLSANDPROJECTS.filter(
          item => !itemsToActivate.includes(item)
        )

        return {
          activeClassName,
          itemsToActivate,
          itemsToDeactivate,
        }
      }
      case "removeClass": {
        return initialState
      }
      default:
        break
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return [state, dispatch]
}

export default useClassNameReducer
