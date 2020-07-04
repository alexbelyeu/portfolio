import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { animated, useTransition } from "react-spring"

const Menu = ({ showMenu }) => {
  const transitions = useTransition(showMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div
        key={key}
        style={props}
        className="absolute bg-indigo-300 mt-1 flex flex-col justify-around w-48 h-48 rounded-sm shadow-xl"
      >
        <a
          href="/projects"
          className="px-2 h-full flex justify-between items-center hover:bg-indigo-200 rounded-t-sm"
        >
          Netflix Study
        </a>
        <a
          href=""
          className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200"
        >
          Shooter Coaster 3D
          <div className="w-5 h-5 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="text-indigo-900 absolute text-sm"
            />
          </div>
        </a>
        <a
          href=""
          className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200"
        >
          Somryst
          <div className="w-5 h-5 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="text-indigo-900 absolute text-sm"
            />
          </div>
        </a>
        <a
          href=""
          className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200"
        >
          Sweetspot
          <div className="w-5 h-5 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="text-indigo-900 absolute text-sm"
            />
          </div>
        </a>
        <a
          href=""
          className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200"
        >
          Slack Jukebox
          <div className="w-5 h-5 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="text-indigo-900 absolute text-sm"
            />
          </div>
        </a>
        <a
          href=""
          className="px-2 h-full flex justify-between items-center border-t border-indigo-200 hover:bg-indigo-200 rounded-b-sm"
        >
          Tapjoy
          <div className="w-5 h-5 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="text-indigo-900 absolute text-sm"
            />
          </div>
        </a>
      </animated.div>
    ) : null
  )
}

export default Menu
