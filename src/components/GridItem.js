import React from "react"

const GridItem = ({
  onMouseEnter,
  onMouseLeave,
  itemsToActivate,
  itemsToDeactivate,
  activeClassName,
  inactiveClassName,
  id,
  item,
}) => {
  const isActive = itemsToActivate.includes(id)
  const isInactive = itemsToDeactivate.includes(id)
  return (
    <div
      id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`transition-all ease-out duration-500 transform
        group h-full w-4/5 flex justify-center items-center
        ${isInactive && inactiveClassName}
        ${isActive && activeClassName}`}
    >
      {item({ isActive })}
    </div>
  )
}

export default GridItem
