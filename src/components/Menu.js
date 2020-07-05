import React from "react"
import { animated, useTrail } from "react-spring"
import ExternalLinkIcon from "./ExternalLinkIcon"
import { Link } from "gatsby"

const items = [
  <Link to="/netflix" className="project-buttons">
    Netflix Study
  </Link>,
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://alexbelyeu.github.io/shooterCoaster/"
    className="project-buttons"
  >
    Shooter Coaster 3D
    <ExternalLinkIcon />
  </a>,
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://somryst.com/"
    className="project-buttons"
  >
    Somryst
    <ExternalLinkIcon />
  </a>,
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.youtube.com/watch?v=vsWjMGmsr8E"
    className="project-buttons"
  >
    Sweetspot
    <ExternalLinkIcon />
  </a>,
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/alexbelyeu/slack-jukebox"
    className="project-buttons"
  >
    Slack Jukebox
    <ExternalLinkIcon />
  </a>,
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.youtube.com/watch?v=yyFtcgLHsXY"
    className="project-buttons"
  >
    Tapjoy
    <ExternalLinkIcon />
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
