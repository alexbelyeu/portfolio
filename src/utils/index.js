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
import GatsbySvg from "../components/svgs/GatsbySvg"
import threeLogo from "../images/three_logo.png"
import ProjectGif from "../components/ProjectGif"

const getKeyByValue = (object, value) => {
  return Object.keys(object).filter(key => object[key].includes(value))
}

export const projectToSkillsMap = PROJECTS.reduce((acc, project) => {
  return { ...acc, [project]: getKeyByValue(skillsToProjectsMap, project) }
}, {})

export const skillsToItemsArray = [
  [HTML, () => <HtmlSvg />],
  [CSS, () => <CssSvg />],
  [JS, () => <JsSvg />],
  [REACT, () => <ReactSvg className="w-20 md:w-24" />],
  [REACTNATIVE, () => <ReactNativeSvg className="w-24 sm:w-32 md:w-40" />],
  [D3, () => <D3Svg />],
  [
    THREE,
    () => <img
      className="w-20 md:w-24"
      alt="three.js"
      title="Three.js"
      src={threeLogo}
      height={40}
    />,
  ],
  [GATSBY, () => <GatsbySvg />],
]

export const projectsToGifsArray = [
  [PORTFOLIO, ({ isActive }) => <ProjectGif isActive={isActive} projectDesc={PORTFOLIO} projectClassName="portfolio-swap" />],
  [NETFLIX, ({ isActive }) => <ProjectGif isActive={isActive} projectDesc={NETFLIX} projectClassName="netflix-swap" />],
  [
    SHOOTERCOASTER,
    ({ isActive }) => <ProjectGif isActive={isActive} projectDesc={SHOOTERCOASTER} projectClassName="shootercoaster-swap" />,
  ],
  [SOMRYST, ({ isActive }) => <ProjectGif isActive={isActive} projectDesc={SOMRYST} projectClassName="somryst-swap" />],
  [SWEETSPOT, ({ isActive }) => <ProjectGif isActive={isActive} projectDesc={SWEETSPOT} projectClassName="sweetspot-swap" />],
  [TAPJOY, ({ isActive }) => <ProjectGif isActive={isActive} projectDesc={TAPJOY} projectClassName="tapjoy-swap" />],
]
