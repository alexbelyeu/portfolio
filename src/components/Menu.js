import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { animated, useTrail } from "react-spring"

const items = [
  <a
    href="/projects"
    className="px-2 h-full flex justify-center items-center bg-indigo-300 border border-indigo-900 shadow-lg rounded-full hover:bg-indigo-200"
  >
    Netflix Study
  </a>,
  <a
    href=""
    className="px-2 h-full flex justify-center items-center bg-indigo-300 border border-indigo-900 shadow-lg rounded-full hover:bg-indigo-200"
  >
    Shooter Coaster 3D
    <div className="w-6 flex justify-center items-center">
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="text-indigo-900 absolute text-xs"
      />
    </div>
  </a>,
  <a
    href=""
    className="px-2 h-full flex justify-center items-center bg-indigo-300 border border-indigo-900 shadow-lg rounded-full hover:bg-indigo-200"
  >
    Somryst
    <div className="w-6 flex justify-center items-center">
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="text-indigo-900 absolute text-xs"
      />
    </div>
  </a>,
  <a
    href=""
    className="px-2 h-full flex justify-center items-center bg-indigo-300 border border-indigo-900 shadow-lg rounded-full hover:bg-indigo-200"
  >
    Sweetspot
    <div className="w-6 flex justify-center items-center">
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="text-indigo-900 absolute text-xs"
      />
    </div>
  </a>,
  <a
    href=""
    className="px-2 h-full flex justify-center items-center bg-indigo-300 border border-indigo-900 shadow-lg rounded-full hover:bg-indigo-200"
  >
    Slack Jukebox
    <div className="w-6 flex justify-center items-center">
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="text-indigo-900 absolute text-xs"
      />
    </div>
  </a>,
  <a
    href=""
    className="px-2 h-full flex justify-center items-center bg-indigo-300 border border-indigo-900 shadow-lg rounded-full hover:bg-indigo-200"
  >
    Tapjoy
    <div className="w-6 flex justify-center items-center">
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="text-indigo-900 absolute text-xs"
      />
    </div>
  </a>,
]

const Menu = ({ showMenu }) => {
  const config = { mass: 5, tension: 4000, friction: 300 }
  const trail = useTrail(items.length, {
    config,
    opacity: showMenu ? 1 : 0,
    x: showMenu ? 0 : 20,
    height: showMenu ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className="absolute mt-1 font-medium text-sm">
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={index}
          className="my-1 w-48"
          style={{
            ...rest,
            transform: x.interpolate(
              x => `translate3d(${index % 2 ? 20 : 0}px,${x}px,0)`
            ),
          }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default Menu
