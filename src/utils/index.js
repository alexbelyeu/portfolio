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
import netflixGif from "../images/netflix_gif.gif"

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
  [
    THREE,
    <img
      alt="three.js"
      title="Three.js"
      src={threeLogo}
      width={100}
      height={40}
    />,
  ],
  [GATSBY, <GatsbySvg />],
]

export const projectsToItemsArray = [
  [
    PORTFOLIO,
    <div className="w-10/12 h-20 flex justify-center items-center border">
      PORTFOLIO
    </div>,
  ],
  [
    NETFLIX,
    <div className="w-10/12 h-24 flex justify-center items-center shadow">
      <img
        className="object-fill h-24 w-full"
        alt="netflix"
        title="netflix"
        src={netflixGif}
      />
    </div>,
  ],
  [
    SHOOTERCOASTER,
    <div className="w-10/12 h-20 flex justify-center items-center border">
      SHOOTERCOASTER
    </div>,
  ],
  [
    SOMRYST,
    <div className="w-10/12 h-20 flex justify-center items-center border">
      SOMRYST
    </div>,
  ],
  [
    SWEETSPOT,
    <div className="w-10/12 h-20 flex justify-center items-center border">
      SWEETSPOT
    </div>,
  ],
  [
    TAPJOY,
    <div className="w-10/12 h-20 flex justify-center items-center border">
      TAPJOY
    </div>,
  ],
]
