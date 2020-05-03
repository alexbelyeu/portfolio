import {
  SHOOTERCOASTER,
  TAPJOY,
  PORTFOLIO,
  SWEETSPOT,
  SOMRYST,
  NETFLIX,
  HTML,
  CSS,
  JS,
  REACT,
  REACTNATIVE,
  D3,
  THREE,
  GATSBY,
  PROJECTS,
} from "./constants"

export const skillsToProjectsMap = {
  [HTML]: [NETFLIX, SHOOTERCOASTER, TAPJOY, PORTFOLIO],
  [CSS]: [NETFLIX, SHOOTERCOASTER, TAPJOY, PORTFOLIO, SOMRYST, SWEETSPOT],
  [JS]: [NETFLIX, SHOOTERCOASTER, TAPJOY, PORTFOLIO, SOMRYST, SWEETSPOT],
  [REACT]: [PORTFOLIO, SOMRYST, SWEETSPOT],
  [REACTNATIVE]: [SOMRYST, SWEETSPOT],
  [D3]: [NETFLIX],
  [THREE]: [SHOOTERCOASTER],
  [GATSBY]: [PORTFOLIO],
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).filter(key => object[key].includes(value))
}

export const projectToSkillsMap = PROJECTS.reduce((acc, project) => {
  return { ...acc, [project]: getKeyByValue(skillsToProjectsMap, project) }
}, {})
