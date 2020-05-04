import React from "react"
import Img from "gatsby-image"

import LayoutPortfolio from "../components/LayoutPortfolio"
import threeLogo from '../images/three_logo.png';
import SEO from "../components/seo"
import "../../tailwind.generated.css"
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
} from "../utils/constants"
import useClassNameReducer from "../utils/useClassNameReducer"
import HtmlSvg from "../components/HtmlSvg"
import CssSvg from "../components/CssSvg"
import JsSvg from "../components/JsSvg"
import GatsbySvg from "../components/GatsbySvg"
import ReactSvg from "../components/ReactSvg"
import ReactNativeSvg from "../components/ReactNativeSvg"
import D3Svg from "../components/D3Svg"

const IndexPage = () => {
  const [state, dispatch] = useClassNameReducer()
  console.log('CONSOLE.LOG: IndexPage -> state', state.classesToActivate);
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
          <div className="grid grid-rows-4 h-120 rounded-lg shadow-lg bg-gray-100 w-screen mx-10 sm:mx-20 md:mx-32 lg:mx-56">
            <div className="grid grid-cols-2 col-span-2 rounded-t-lg">
              <div className="grid justify-center items-center rounded-tl-lg">
                <div className="py-3 w-24 text-center border-b-2">
                  <p className="text-xl font-semibold">Skills</p>
                </div>
              </div>
              <div className="grid justify-center items-center rounded-tr-lg">
                <div className="py-3 w-24 text-center border-b-2">
                  <p className="text-xl font-semibold">Projects</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 col-span-2 row-span-4 rounded-b-lg">
              <div className="flex flex-col justify-around items-center">
                <p
                  id={HTML}
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  className={`opacity-25 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100 ${
                    state.classesToActivate.includes(HTML) &&
                    state.activeClassName
                  }`}
                >
                  <HtmlSvg />
                </p>
                <p
                  id={CSS}
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  className={`opacity-25 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100 ${
                    state.classesToActivate.includes(CSS) &&
                    state.activeClassName
                  }`}
                >
                  <CssSvg />
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={JS}
                  className={`opacity-25 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100 ${
                    state.classesToActivate.includes(JS) &&
                    state.activeClassName
                  }`}
                >
                  <JsSvg />
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={REACT}
                  className={`opacity-25 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100 ${
                    state.classesToActivate.includes(REACT) &&
                    state.activeClassName
                  }`}
                >
                  <ReactSvg />
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={REACTNATIVE}
                  className={`opacity-25 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100 ${
                    state.classesToActivate.includes(REACTNATIVE) &&
                    state.activeClassName
                  }`}
                >
                  <ReactNativeSvg />
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={D3}
                  className={`opacity-25 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100 ${
                    state.classesToActivate.includes(D3) &&
                    state.activeClassName
                  }`}
                >
                  <D3Svg />
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={THREE}
                  className={`opacity-25 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100 ${
                    state.classesToActivate.includes(THREE) &&
                    state.activeClassName
                  }`}
                >
                  <img alt="three.js logo" src={threeLogo} width={100} />
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={GATSBY}
                  className={`opacity-25 transition-all ease-out duration-500 transform hover:scale-125 hover:opacity-100 ${
                    state.classesToActivate.includes(GATSBY) &&
                    state.activeClassName
                  }`}
                >
                  <GatsbySvg />
                </p>
              </div>
              <div className="flex flex-col justify-around items-center">
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={NETFLIX}
                  className={`text-teal-300 hover:text-teal-500 ${
                    state.classesToActivate.includes(NETFLIX) &&
                    state.activeClassName
                  }`}
                >
                  {NETFLIX}
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={SHOOTERCOASTER}
                  className={`text-teal-300 hover:text-teal-500 ${
                    state.classesToActivate.includes(SHOOTERCOASTER) &&
                    state.activeClassName
                  }`}
                >
                  {SHOOTERCOASTER}
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={TAPJOY}
                  className={`text-teal-300 hover:text-teal-500 text-center ${
                    state.classesToActivate.includes(TAPJOY) &&
                    state.activeClassName
                  }`}
                >
                  {TAPJOY}
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={SOMRYST}
                  className={`text-teal-300 hover:text-teal-500 ${
                    state.classesToActivate.includes(SOMRYST) &&
                    state.activeClassName
                  }`}
                >
                  {SOMRYST}
                  <span role="img" aria-label="TM">
                    ™️
                  </span>
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={PORTFOLIO}
                  className={`text-teal-300 hover:text-teal-500 ${
                    state.classesToActivate.includes(PORTFOLIO) &&
                    state.activeClassName
                  }`}
                >
                  {PORTFOLIO}
                </p>
                <p
                  onMouseEnter={focusRelevant}
                  onMouseLeave={unfocusRelevant}
                  id={SWEETSPOT}
                  className={`text-teal-300 hover:text-teal-500 ${
                    state.classesToActivate.includes(SWEETSPOT) &&
                    state.activeClassName
                  }`}
                >
                  {SWEETSPOT}
                </p>
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
