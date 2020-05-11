import React from "react"

const GridItem = ({
  onMouseEnter,
  onMouseLeave,
  itemsToActivate,
  itemsToDeactivate,
  activeClassName,
  id,
  item,
  initialClass,
}) => (
  <div
    id={id}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`transition-all ease-out duration-500 transform
      h-full w-4/5 md:w-3/5 flex justify-center items-center
      ${initialClass}
      ${itemsToActivate.includes(id) && activeClassName}`}
  >
    {item({
      isActive: itemsToActivate.includes(id),
    })}
  </div>
)

export default GridItem
