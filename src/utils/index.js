import React from "react"
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
  skillsToProjectsMap,
} from "./constants"
import HtmlSvg from "../components/svgs/HtmlSvg"
import CssSvg from "../components/svgs/CssSvg"
import JsSvg from "../components/svgs/JsSvg"
import ReactSvg from "../components/svgs/ReactSvg"
import ReactNativeSvg from "../components/svgs/ReactNativeSvg"
import D3Svg from "../components/svgs/D3Svg"
import threeLogo from "../images/three_logo.png"
import GatsbySvg from "../components/svgs/GatsbySvg"

const getKeyByValue = (object, value) => {
  return Object.keys(object).filter(key => object[key].includes(value))
}

export const projectToSkillsMap = PROJECTS.reduce((acc, project) => {
  return { ...acc, [project]: getKeyByValue(skillsToProjectsMap, project) }
}, {})

export const skillsToItemsArray = [
  [HTML, <HtmlSvg />],
  [CSS, <CssSvg />],
  [JS, <JsSvg />],
  [REACT, <ReactSvg />],
  [REACTNATIVE, <ReactNativeSvg />],
  [D3, <D3Svg />],
  [THREE, <img alt="three.js" title="Three.js" src={threeLogo} width={100} height={40} />],
  [GATSBY, <GatsbySvg />],
]

export const projectsToItemsArray = [
  [PORTFOLIO, <div className="">PORTFOLIO</div>],
  [NETFLIX, <div className="">NETFLIX</div>],
  [SHOOTERCOASTER, <div className="">SHOOTERCOASTER</div>],
  [SOMRYST, <div className="">SOMRYST</div>],
  [SWEETSPOT, <div className="">SWEETSPOT</div>],
  [TAPJOY, <div className="">TAPJOY</div>],
]
