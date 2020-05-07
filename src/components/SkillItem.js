import React from "react"

const SkillItem = ({
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
    className={`${initialClass} ${
      classesToActivate.includes(id) && activeClassName
    }`}
  >
    {item}
  </div>
)

export default SkillItem
