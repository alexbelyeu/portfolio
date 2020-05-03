import { useReducer } from "react"
import { skillsToProjectsMap, projectToSkillsMap } from "./skillsToProjectsMap"

type ClassNameType = {
  activeClassName: string
  classesToActivate: string[]
}
type ActionType = {
  type: string
  id: string
}
const useClassNameReducer = (): [ClassNameType, ActionType | any] => {
  const initialState: ClassNameType = {
    activeClassName: "",
    classesToActivate: [],
  }
  const reducer = (state: ClassNameType, action: ActionType): ClassNameType => {
    switch (action.type) {
      case "addClass": {
        const isSkill = Object.keys(skillsToProjectsMap).includes(action.id)
        const activeClassName = isSkill
          ? "text-teal-500"
          : "transition-all ease-out duration-500 transform scale-150 opacity-100"
        const classesToActivate = isSkill
          ? skillsToProjectsMap[action.id]
          : projectToSkillsMap[action.id]

        return {
          activeClassName,
          classesToActivate,
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
