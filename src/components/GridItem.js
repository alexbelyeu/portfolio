import React from "react"

const GridItem = ({
  activeClassName,
  classesToActivate,
  id,
  initialClass,
  item,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    id={id}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`h-full w-4/5 lg:w-3/5 flex justify-center items-center ${initialClass} ${
      classesToActivate.includes(id) && activeClassName
    }`}
  >
    {item}
  </div>
)

export default GridItem
